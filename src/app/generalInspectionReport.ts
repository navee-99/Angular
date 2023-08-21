

export interface generalInspectionReport{
  dieSetNo: string;
  buyOffType: string;
  programNo:string;
  plantName: string;
  dieSetLneUp1: string;
  dieSetLneUp2:string;
  dieSetLneUp3:string;
  dieSetLneUp4: string;
  dieSetLneUp5: String;
  dieSetLneUp6: String;
  supplier: string;
  lstSelVo: [List];
  lstSevrty: [List];
  lstStatVo:[List];
  lstGenVo:[lstGenVoList];
  partNo:string;
  partName:string;
  offlneFlg:boolean;


}

export interface List{
  key: number;
  value: string;
}

export interface lstGenVoList{
  cat1: string;
  cat2: string;
  sub1: string;
  sub2: string;
  sub3:string;
  remarks:string;
  result:number;
  resultStr:string;
  errMsg:string;
  errFlg:boolean;
  dmDftn: string;
  passFail:string;
  wdxRef:string;
  category:string;
  issVoLst:[issVoList];
}
export interface issVoList{
  issuId:string;
  desc:string;
  issuDt:string;
  svrty:number;
  actnDesc:string;
  actnDt:string;
  stat:number;
  sno:number;
  imgVoLst:[imgVoList];
  updtFlg:boolean;
}
export interface imgVoList{
  issImg:string;
  crctImg:string;
  issImgName:string;
  crctImgName:string;
  sno:string;

}
export interface generalinspectionFetchInput{
  buyOffType:string;
  dieSetNo:string;
  userName:string;
}
