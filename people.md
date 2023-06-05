---
title: "Poldracklab members"
listing:
  template: people.ejs
  contents:
    - people.yml
  template-params:
    # For each icon, add the base URL, icon URL and alt text
    # The base URL will be concatenated with the field in the member definition
    # For example, ORCID will produce links like
    # <a href="{orcid.base_url}{member.orcid}"><img src="{orcid.icon}" alt="{orcid.alt}"></a>
    # <a href="https://orcid.org/{member.orcid}"><img src="..." alt="ORCID"></a>
    orcid:
      base_url: https://orcid.org/
      icon: https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png
      alt: ORCID
    github:
      base_url: https://github.com/
format:
  html:
    page-layout: full
---
