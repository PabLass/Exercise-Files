
# %%
import matplotlib
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
import statsmodels.api as sm
import statsmodels.formula.api as smf
import warnings
import numpy as np
import pandas as pd
from matplotlib import pyplot as plt
from statsmodels.tsa.stattools import adfuller
from statsmodels.tsa.arima_model import ARIMA
from pandas.plotting import register_matplotlib_converters
register_matplotlib_converters()
from matplotlib import rcParams
from pydomo import Domo
from IPython.display import display, HTML
domo = Domo('62c51b7b-d9ec-4715-affe-21b1c8b7d58a',
            'af64268431ea11771368b9912598bcd4c63c5bb223610357a3c8841cc8de45f6', api_host='api.domo.com')
#53620955-e55e-4726-bafb-e6f88aa5dba7
all_data = domo.ds_get('53620955-e55e-4726-bafb-e6f88aa5dba7')

all_data.to_csv('data.csv')


# %%
