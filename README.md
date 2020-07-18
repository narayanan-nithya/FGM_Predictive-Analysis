# Female Genital Mutilation/Cutting Prevalence - Predictive Survival Analysis

## Background Information 

The World Health Organization (WHO) defines Female Genital Mutilation/Cutting (FGM/C) as all procedures involving partial or total removal of the external female genitalia or other injury to the female genital organs for nonmedical reasons. The estimated number of women who have undergone FGM is [at least 200 million across 31 countries](https://data.unicef.org/topic/child-protection/female-genital-mutilation/#:~:text=Data%20sources,other%20nationally%20representative%20household%20surveys.) FGM can cause both short and long term [health problems such as excessive bleeding, vaginal inflammation caused by bacteria and newborn death](https://www.sciencedirect.com/topics/medicine-and-dentistry/female-genital-mutilation).  Despite these negative health consequences and intensified eradiation efforts, FGM has continuously been performed partly because of the [evidence gaps](https://www.popcouncil.org/research/evidence-to-end-fgm-c-research-to-help-girls-and-women-thrive1) that hinder a comprehensive evidence-based approach to FGM. 

We believe that data scientists can help reduce the evidence gap and present information that could potentially accelerate the FGM eradication effort.

## Goal

The goal of this study is to examine what factors might reduce FGM practices and how long it might take to eradicate it. 

## Methodology

### Source Data:

UNICEF : Nationally representative data on FGM or Cutting are mainly available from [Demographic and Health Surveys (DHS) and Multiple Indicator Cluster Surveys (MICS).](https://data.unicef.org/topic/child-protection/female-genital-mutilation/#:~:text=Data%20sources,other%20nationally%20representative%20household%20surveys.) We used data from 2004 through 2018. 

### Countries included in the source data:

* Benin
* Burkina Faso
* Cameroon
* Central African Republic
* Chad
* Cote d' Ivoire
* Djibouti
* Egypt
* Eritrea
* Ethiopia
* Gambia
* Ghana
* Guinea
* Guinea Bissau
* Iraq
* Kenya
* Liberia
* Mali
* Maldives
* Mauritania
* Niger
* Nigeria
* Senegal
* Sierra Leone
* Somalia
* Sudan
* Togo
* Uganda
* United Republic of Tanzania
* Yemen


### Developing Analysis Data File:
The original data were separated in 3 files: 1) prevalence of FGM by countries 2) attitude toward FGM by countries, and 3) socio-economic information such as education, labor force participation and urban/rural population by countries.  Information in these files were pulled together through joining on country names.


### Analysis Methods:
There are some limitations in the availability of data for some countries. Therefore, we used all the available data and conducted region-based analyses (Primarily Africa). 
> Step 1: Analyze the overall characteristics of FGM practice using data visualization methods such as scatter plots and bar charts.   
> Step 2: Analyze what factors are associated with the prevalence of FGM using a regression analysis. The dependent variable was the prevalence of FGM, and the independent variables were percentages of urban/rural residents, income levels, education levels, and opposition of women against FGM.  
> Step 3: Analyze how long it might potentially take to eradicate FGM practices using survival analysis if the percentage of women opposing FGM increases. The survival model was developed based on the data between 2010 and 2018.


### Findings

The results of the regression analysis indicated 2 factors can potentially reduce the prevalence of FGM: 1) increased percentage of women with higher than secondary education and 2) increased percentage of women who oppose FGM. A high percentage of women with high income or of those living in the urban areas do not appear to help in reducing the practice. 

The results of survival analysis indicated if the percentages of women opposing FGM increases by 10-13% every year for 7 years, the practice might be eradicated in the 8th year. 
