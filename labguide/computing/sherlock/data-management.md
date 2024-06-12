## Data management on Sherlock

Datasets that are considered to be common lab assets (which includes any new studies within the lab and any openly shared datasets) should be placed into the primary data directory on the relevant filesystem.
Datasets that are in process of acquisition should go into the “inprocess” directory.
Once the dataset is finalized, it should be moved into the “data” directory.

Once a dataset has been installed in the data directory, it should be changed to be read-only for owner and group, using the following commands:

```bash
find <directory name> -type d -exec chmod 550
find <directory name> -type f -exec chmod 440
```

Datasets that are temporary, or files generated for analyses that are not intended to be reused or shared, should be placed within the user directory.

### Checking current quota limits

There are several useful commands for assessing current storage usage on Sherlock:

    - `sh_quota` is a Sherlock-specific command that provides a general overview for all partitions a user has access to.
        [Documentation is provided on their wiki](https://www.sherlock.stanford.edu/docs/storage/?h=sh_quota#checking-quotas).
    - `ncdu` provides an interactive explorer for current storage usage within a given directory.
        This can be useful when identifying where quota usage is being allocated. 
        Sherlock [recommends running it in an interactive job](https://www.sherlock.stanford.edu/docs/storage/?h=ncdu#locating-large-directories). 
