## Managing data access on Sherlock

### Restricting access

Some data resources cannot be shared across the lab and instead need to be restricted to lab members with Data Usage Agreement (DUA) access.
The following can be adapted to restrict ACLs (access control list) to only the appropriate subset of lab members:

```
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
echo -e "Setting restrictions for ${user_name} as rxw for folder: /n ${dir_name"
setfacl -R -m u:$user_name:rwx $dir_name
setfacl -R -d -m u:$user_name:rwx $dir_name

# rm default permissions for the group -- oak_russpold
setfacl -m d::group:oak_russpold:--- $dir_name
```