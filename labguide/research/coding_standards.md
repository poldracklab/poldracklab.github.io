# Coding standards

Code is a core research product of the lab.
We expect that lab members write code with the intention of it being reviewed (and potentially re-used) by other lab members.

To help in this, all lab members should be familiar with principles of clean code.
Dr. Poldrack has a [presentation on this topic](https://github.com/poldrack/clean_coding/blob/master/CleanCoding_Python.pdf) that we encourage you to review.
For a more in-depth introduction, two particularly useful recommendations here are:

- [Art of Readable Code](https://www.oreilly.com/library/view/the-art-of/9781449318482/)
- [Clean Code](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)

When writing readable code, many different design patterns can be followed.
We therefore provide some general purpose recommendations below as well as some Python examples taken from [Dr. Poldrack's clean code tutorial](https://github.com/poldrack/clean_coding/tree/master/python_example).

We also recommend checking out relevant tutorials, like the [Good Research Code Handbook](https://goodresearch.dev/index.html). 

## Code should be modular

Write code such that it can be reviewed as individual units, each of which has one well-scoped function.

- Functions should do a single thing that is clearly expressed in the name of the function
- Functions should include a docstring that clearly specifies input and output

Here is one example of code that would be difficult to understand and review in a larger script:

```python
sc=[]
for i in range(data.shape[1]):
    if data.columns[i].split('.')[0][-7:] == '_survey':
        sc=sc+[data.columns[i]]
data=data[sc]
```

Compare this with a modularized refactoring:

```python
def extract_surveys_from_behavioral_data(behavioral_data_raw):
    """
    Extract survey data from behavioral data.
    survey variables are labeled <survey_name>_survey.<variable name>
    so filter on variables that include "_survey" in their name

    Parameters
    ----------
    behavioral_data_raw : pandas.DataFrame
    """
    survey_variables = [i for i in behavioral_data_raw.columns if i.find('_survey') > -1]
    return behavioral_data_raw[survey_variables]
```

## Code should be portable

Aim to be able to execute your code on a new machine.

- Any absolute paths should be specified as a variable in a single location, or preferably as a command line argument
- Any required environment variables should be clearly described
- Any non-standard requirements  (e.g. Python libraries not available through PyPI) should be described with instructions on how to install

Here is an example of what _not_ to do:

```python
h=read_csv('https://raw.githubusercontent.com/poldrack/clean_coding/master/data/health.csv',index_col=0)[hc].dropna().mean(1)
```

Compare this with a modular, portable refactoring:

```python
# load health data
def load_health_data(datadir, filename='health.csv'):
    return pd.read_csv(os.path.join(datadir, filename), index_col=0)
```

## Important functions should be tested

Functions that are critical for correct outputs should be tested.
At a minimum, unit tests should be written to check that the correctness of outputs.
For example, here is a minimal unit test to ensure that two data frames have the same index:

```python
def confirm_data_frame_index_alignment(df1, df2):
    assert all(df1.index == df2.index)
```

More detailed recommendations on testing---including testing frameworks such as PyTest---are available in the [Hitchhiker's Guide to Python](https://docs.python-guide.org/writing/tests/).

## Python packaging

For projects that aim to develop pip-installable packages should follow current best-practices in Python Packaging.
As of May 2024, this is outlined in [this blog post](https://effigies.gitlab.io/posts/python-packaging-2023/) by lab member Chris Markiewicz.