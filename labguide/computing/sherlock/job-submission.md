## Job submission on Sherlock

::: {.callout-important}
Login nodes are shared among many users and therefore must not be used to run computationally intensive tasks.
Those should be submitted to the scheduler which will dispatch them on compute nodes.
:::

### Running interactive jobs with `sh_dev`

`sh_dev` sessions run on dedicated compute nodes, ensuring minimal wait times when you need to access a node for testing script, debug code or any kind of interactive work.
`sh_dev` also provides X11 forwarding via the submission host (typically the login node you're connected to) and can thus be used to run GUI applications.

Users can [specify `sh_dev` calls](https://www.sherlock.stanford.edu/docs/user-guide/running-jobs/#compute-nodes) with specific memory requests.

#### Interactive jobs from existing scripts: `salloc`

If you prefer to submit an existing job script or other executable as an interactive job, you can use the `salloc` command:

```bash
salloc script.sh
```

`salloc` will start a Slurm job and allocate resources for it, but it will not automatically connect you to the allocated node(s).
It will only start a new shell on the same node you launched salloc from, and set up the appropriate `$SLURM_*` environment variables. 

### Submitting to the scheduler

Most large, long-running jobs on Sherlock should be submitted via the job scheduler.

Most jobs can be submitted the the scheduler using the `sbatch` command. 
Sherlock provides [documentation](https://www.sherlock.stanford.edu/docs/getting-started/submitting/#batch-scripts) for how to generate `sbatch` submission scripts.
There is also an [experimental slurm-o-matic](http://slurm-o-matic.stanford.edu/) tool to help in generating these scripts interactively.

#### Best practice in submitting jobs

Best practice before launching large, long-running jobs on Sherlock is to run a short test job to evaluate the time memory requirements.
The basic idea is to run a small test job with minimal resource requirements---so the job will run quickly---then re-queue the job with optimized resource requests.

Jobs can be evaluated along three dimensions: memory, parallelization (i.e., number of nodes and CPUs), and run time.
We briefly highlight why each axis is important below, as well as how to evaluate its requirements.

- **Memory:** Evaluating memory requirements of completed jobs is straightforward tools such as `sacct` (see @sec-acct).
  Requesting excessive memory and not using it will count against your [FairShare score](https://www.sherlock.stanford.edu/docs/glossary/#fairshare).

- **Parallelization:** Evaluating how well the job perfomance scales with added CPUs can be done using `seff` (see @sec-seff).
  Requesting CPUs then not using them will still count against your [FairShare score](https://www.sherlock.stanford.edu/docs/glossary/#fairshare).
    
- **Run Time:** Requesting excess time for your jobs will _not_ count against your [FairShare score](https://www.sherlock.stanford.edu/docs/glossary/#fairshare), but it will affect how quickly the scheduler allocates resources to your job.

Below, we provide more detailed resources (and example commands) for monitoring jobs.

#### Monitoring running jobs

##### Using `squeue`

Users can monitor the status of their currently running jobs on Sherlock with `squeue`:

```bash
squeue -u $USER
```

This command  will monitor how long a job has been sitting on queue or actively running, depending on status.

##### Using `clush`

More detailed information on running jobs can be found using [`clush`](https://www.sherlock.stanford.edu/docs/software/using/clustershell/), which can be loaded via the module system:

```bash
ml system py-clustershell
clush -N -w @job:<your Job ID> top -b -n 1
```

On Sherlock, it provides an easy way to run commands on nodes your jobs are running on, and collect back information.
In the above example, we use `clush` to execute the `top` command, which provides real-time monitoring of job resource usage.
Many other uses are possible; for example,

```bash
clush -w @j:<your Job ID> ps -u$USER -o%cpu,rss,cmd
```

Will return the CPU and memory usage of all processes for a given job ID.

#### Example of fMRIPrep job submissions

One application commonly run within Poldracklab is [`fMRIPrep`](https://fmriprep.org/en/stable/).
Since lab members will often submit many fMRIPrep jobs at the same time, it is best practice to submit these as an [array job](https://rcpedia.stanford.edu/training/10_job_array.html).

We provide an example fMRIPrep array job script below for running 5 individual subjects.

```
#!/bin/bash
#
#SBATCH --job-name=fMRIPrep
#SBATCH --output=fmriprep.%j.out
#SBATCH --time=1-00:00
#SBATCH --cpus-per-task=16
#SBATCH --mem-per-cpu=8GB
#SBATCH --mail-user=<your-email>@stanford.edu
#SBATCH --mail-type=FAIL
#SBATCH --array=1-5
#SBATCH -p russpold,owners,normal


# Define directories

DATADIR=</your/project/directory>
SCRATCH=</your/scratch/directory>
SIMGDIR=</your/project/directory/simgs>

# Begin work section
subj_list=(`find $DATADIR -maxdepth 1 -type d -name 'sub-*' -printf '%f\n' | sort -n -ts -k2.1`)
sub="${subj_list[$SLURM_ARRAY_TASK_ID]}"
echo "SUBJECT_ID: " $sub

singularity run --cleanenv -B ${DATADIR}:/data:ro \
	-B ${SCRATCH}:/out \
	-B ${DATADIR}/license.txt:/license/license.txt:ro \
	${SIMGDIR}/fmriprep-23-2-0.simg \
	/data /out participant \
        --participant-label ${sub} \
	--output-space MNI152NLin2009cAsym:res-2 \
	-w /out/workdir \
	--notrack \
        --fs-license-file /license/license.txt 
```

### Evaluating completed job resources

Regardless of whether your job was run in an interactive (i.e., using `sh_dev`) or non-interactive (i.e., using `sbatch` session), it is useful to evaluate how many resources they consumed after running:

#### Using `seff` {#sec-seff}

Nominally, the fastest and easiest way to get a summary report, for a given job, is the “SLURM efficiency” tool, `seff`.
This tool returns a simple, human-readable format report that includes both allocated as well as actually used resources (nodes, CPUs, memory, wall time).

```bash
seff <your Job ID>
```

Generally speaking, `seff` reports can be used to determine how well (if at all) a job parallelizes, how much memory to request for future implementations of the job, and how much time to request. 
More granular reporting, however, is possible using the `sacct` command.

#### Using `sacct` {#sec-sacct}

More rigorous resource analysis can be performed after a job has completed by using SLURM accounting, or `sacct`.
Again, SLURM provides a rigorous documentation, including using `--format=` to define which columns to output and the various options that can constrain a query. 

```bash
sacct --user=$USER --start=2023-09-01 --end=2023-09-03 --format=jobid,jobname,partition,account,nnodes,ncpus,reqmem,maxrss,elapsed,totalcpu,state,reason
```
