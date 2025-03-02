export type AdaCompilanceRequestArgs = {
	url: string;
	email: string;
	fullName: string;
};

export type CategoryPayload = {
  description: string;
  count: number;
};

export type WaveResponse = {
  status: { success: boolean; httpstatuscode: number };
  statistics: {
    pagetitle: string;
    pageurl: string;
    time: number;
    creditsremaining: number;
    allitemcount: number;
    totalelements: number;
    waveurl: string;
  };
  categories: {
    error: CategoryPayload;
    contrast: CategoryPayload;
    alert: CategoryPayload;
    feature: CategoryPayload;
    structure: CategoryPayload;
    aria: CategoryPayload;
  };
};

export type FormattedCategories = {
  title: string;
  description: string;
  count: number;
}

