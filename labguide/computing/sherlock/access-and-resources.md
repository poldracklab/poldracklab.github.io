## Access and resources

This section describes getting initial access to Sherlock and monitoring available resources.

### Compute basics

#### Acquiring an account and logging in

If you are a new member of a lab at stanford, you will need to have your PI email Sherlock's support to get your SUNet account configured for use with computing resources.
See the [Sherlock getting started guide](https://www.sherlock.stanford.edu/docs/getting-started/#prerequisites) for details.

Once you have an account set up with your SUNet ID `<username>`, you can access Sherlock via any SSH client client.
If you are using a UNIX-like system (e.g., MacOS) and you are using terminal to connect to sherlock, a useful resource is to set up an ssh config file.
You can do this by editing or creating the file `~/.ssh/config`, and adding the following lines:

```{.default filename="~/.ssh/config"}
Host sherlock
    HostName login.sherlock.stanford.edu
	User <username>
	KexAlgorithms +diffie-hellman-group-exchange-sha1
```

Navigating to terminal, you can login to Sherlock using:

```bash
$ ssh sherlock
```

and then follow the remainder of the instructions [Sherlock connection guide](https://www.sherlock.stanford.edu/docs/getting-started/connecting/#credentials).

#### Storage Monitoring

The Stanford filesystems have fixed allocations for individuals and groups.
As such, it will be useful for you to be able to determine how much space you/the group have, so that you can optimally manage your resources.
For extended details on storage with Sherlock, check out [Sherlock storage guide](https://www.sherlock.stanford.edu/docs/storage/#quotas-and-limits).

There are several commands that we find extremely useful for working on Sherlock.
We will go over several of them.

Sherlock has fixed allocations for the storage of individuals and groups.
As such, you will be required to properly manage your storage allocations, re-allocating data to group-level directories as necessary.

To check your quotas for your group `<groupname>`, you can use the `sh_quota` command:

```default
$ sh_quota
+---------------------------------------------------------------------------+
| Disk usage for user <username> (group: <groupname>)                       |
+---------------------------------------------------------------------------+
|   Filesystem |  volume /   limit                  | inodes /  limit       |
+---------------------------------------------------------------------------+
          HOME |   9.4GB /  15.0GB [||||||     62%] |      - /      - (  -%)
    GROUP_HOME | 562.6GB /   1.0TB [|||||      56%] |      - /      - (  -%)
       SCRATCH |  65.0GB / 100.0TB [            0%] | 143.8K /  20.0M (  0%)
 GROUP_SCRATCH | 172.2GB / 100.0TB [            0%] |  53.4K /  20.0M (  0%)
           OAK |  30.8TB / 240.0TB [|          12%] |   6.6M /  36.0M ( 18%)
+---------------------------------------------------------------------------+
```

`sh_quota` is a Sherlock-specific command that provides a general overview for all partitions a user has access to.
[Documentation is provided on their wiki](https://www.sherlock.stanford.edu/docs/storage/?h=sh_quota#checking-quotas).
When your home directory begins to get filled, it may be valuable to consider moving files to scratch directories, or group directories.
`HOME`, `GROUP_HOME`, and `OAK` are persistent storage; `*SCRATCH` directories are subject to purging.

Another useful tool is the disk usage command `du`.
A useful and more interacrtive version of this command is `ncdu`.
To use `ncdu`, add the following line to the bottom of your `~/.bash_profile`, which will load the `ncdu` module each time you log in to Sherlock:

```bash
$ ml system ncdu
```

In future login session, you can access the `ncdu` command via

```bash
$ ncdu <folder>
```

which will launch an interactive window for monitoring directory sizes from the folder specified by `<folder>`.
Sherlock [recommends running it in an interactive job](https://www.sherlock.stanford.edu/docs/storage/?h=ncdu#locating-large-directories).
This can be useful when identifying where quota usage is being allocated.
