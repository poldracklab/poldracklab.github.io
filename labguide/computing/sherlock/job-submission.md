## Job submission on Sherlock

Most jobs on Sherlock should be submitted via the job scheduler.
Sherlock provides [documentation](https://www.sherlock.stanford.edu/docs/getting-started/submitting/#batch-scripts) for how to generate submission scripts.
There is also an [experimental slurm-o-matic](http://slurm-o-matic.stanford.edu/) tool to help in generating these scripts interactively.

### Example of fMRIPrep job submissions

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