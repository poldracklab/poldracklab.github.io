## Data management on Sherlock

This section describes how the lab manages datasets on Sherlock, including setting permissions (i.e., who else in the lab can access the dataset).

Datasets that are considered to be common lab assets (which includes any new studies within the lab and any openly shared datasets) should be placed into the primary data directory on the relevant filesystem.
Datasets that are in process of acquisition should go into the “inprocess” directory.
Once the dataset is finalized, it should be moved into the “data” directory.

Once a dataset has been installed in the data directory, it should be changed to be read-only for owner and group, using the following commands:

```bash
find <directory name> -type d -exec chmod 550
find <directory name> -type f -exec chmod 440
```

Datasets that are temporary, or files generated for analyses that are not intended to be reused or shared, should be placed within the user directory.

#### Restricting access

Some data resources cannot be shared across the lab and instead need to be restricted to lab members with Data Usage Agreement (DUA) access.
The following can be adapted to restrict ACLs (access control list) to only the appropriate subset of lab members:

```{.bash filename="protect_access.sh"}
#!/bin/bash

echo "Using ACLs to restrict folder access on oak for russpold folders"
echo -e "\t https://www.sherlock.stanford.edu/docs/storage/data-sharing/#posix-acls "
sleep 1
echo
# get user input for directory + user
read -p "Enter the folder path: " dir_name
if [ ! -d "$dir_name" ]; then
	echo "Error: ${dir_name} doesn't exist"
	exit 1
fi

read -p "Enter the username: " user_name

# set restrictions
echo -e "Setting restrictions for ${user_name} as rxw for folder: /n ${dir_name}"
setfacl -R -m u:$user_name:rwx $dir_name
setfacl -R -d -m u:$user_name:rwx $dir_name

# rm default permissions for the group -- oak_russpold
setfacl -m d::group:oak_russpold:--- $dir_name
```