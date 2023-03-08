import { ChainablePromiseElement } from "webdriverio";

import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class applyLeavepage extends Page {
  /********************************************************************************************************************************
   * define selectors using getter methods
   */
  public get GblSearch() {
    // the last value 1 represents one level of preceding sibling above self
    return $("//input[@id = 'txt' and @placeholder = 'Search']");
  }

  public get GblSearchSelector() {
    // the last value 1 represents one level of preceding sibling above self
    return $("//*[@id = 'divBody']//*[@id='div_0']");
  }

  public get btnSelfRedio() {
    // the last value 1 represents one level of preceding sibling above self
    return $(
      "//span[text()='Self']/preceding-sibling::input[@type='radio'][1]"
    );
  }

  public get btnTeamMeRedio() {
    return $(
      "//span[text()='Team member']/preceding-sibling::input[@type='radio'][1]"
    );
  }

  public get btnEmpRedio() {
    return $(
      "//span[text()=' Employee']/preceding-sibling::input[@type='radio'][1]"
    );
  }
  public get dpdnLeaveType() {
    return $(
      "//span[@class='filter-option pull-left'][normalize-space()='Select']"
    );
  }

  public get dpdnBigInputBox() {
    return $(
      "//div[@class='bs-container btn-group bootstrap-select dropup open']//div[@class='dropdown-menu open']//div[@class='bs-searchbox']//input[@role='textbox']"
    );
  }

  public get dpdnMdimInputBox() {
    return $(
      "//div[@class='bs-container btn-group bootstrap-select open']//div[@class='dropdown-menu open']//div[@class='bs-searchbox']//input[@role='textbox']"
    );
  }

  public get dpdnSmlInputBox() {
    return $(
      "//div[@class='btn-group bootstrap-select dropup open']//div[@class='dropdown-menu open']//div[@class='bs-searchbox']//input[@role='textbox']"
    );
  }
  public get listSelectdpdn() {
    // title*= value has to be changed as per leave type and as of now it's not dynamic value
    return $(
      "[class='bs-container btn-group bootstrap-select open'] div ul li a span[title*='Annual Leave - (']"
    );
  }

  public get selectFirstItemListdpdn() {
    // title*= value has to be changed as per leave type and as of now it's not dynamic value
    return $("//li[@class='active']//a[@role='option']");
  }

  public get inptFromDate() {
    return $("//div[normalize-space()='From Date'][1]/following::input[1]");
  }

  public get inptToDate() {
    return $("//div[normalize-space()='To Date'][1]/following::input[1]");
  }

  public get chkbxHalfDay() {
    return $("//div[text()='Half Day']//..//input[1]");
  }

  public get dpdnDuration() {
    //this id to select the dropdown option
    return $(
      "//div[text()='Duration']/..//span[@class='filter-option pull-left'][normalize-space()='Morning']"
    );
  }

  public get dpdnPartialDays() {
    //this id to select the dropdown option
    return $(
      "//div[text()='Partial Days']/..//span[@class='filter-option pull-left'][normalize-space()='Select']"
    );
  }

  public get dpdnPartialDaysListAD() {
    //Ad meant All Day Only option to click
    return $("ul li a [title='All Days']");
  }

  public get dpdnPartialDaysListSDO() {
    //Ad meant Start Day Only option
    return $("ul li a [title='Start Day Only']");
  }

  public get dpdnPartialDaysListEDO() {
    //Ad meant End Day Only option
    return $("ul li a [title='End Day Only']");
  }

  public get dpdnPartialDaysListAED() {
    //Ad meant Start and End Day option
    return $("ul li a [title='Start and End Day']");
  }

  public get dpdnHalfDay() {
    return $(
      "//div[text()='Half Day']/..//span[@class='filter-option pull-left'][normalize-space()='Morning']"
    );
  }

  public get dpdnDuringMorning() {
    return $("ul[aria-expanded='true'] li a [title='Morning']");
  }

  public get dpdnDuringAfternoon() {
    return $("ul[aria-expanded='true'] li a [title='Afternoon']");
  }

  public get linkSelectApprover() {
    return $(
      "//div[text()=' Requested By']//..//div[text()='Select Approver']");
  }

  public get firstBoxItemSelectApprover() {
    return $("(//div[@class='tile tile_row_ful'])[1]");
  }

  public get btnAssign() {
    return $("//div[@class='btn_gen btn_grn']");
  }

  public get VerifyApproverSelectd() {
    return $("//div[text()='1 Approver(s) selected']");
  }

  public get inptRemarksAL() {
    return $("textarea[placeholder='Enter Remarks']");
  }

  public get inptCommentsAL() {
    return $("textarea[placeholder='Enter Comments']");
  }

  public get btnSubmitAL() {
    return $("//span[@actname='Submit']");
  }

  public get btnconfirmYes() {
    return $("#btnYesCofirm");
  }
  public get btnconfirmNo() {
    return $("#btnNoConfirm");
  }
  public get notytopalert() {
    return $("#fbNewComp_feedback");
  }

  public get successNotifyMsg() {
    return $("//div[@id='fbNewComp_feedback']//div[text()='Request submitted for approval successfully.']");
  }

  public get iconCloseTopMsg() {
    return $("//div[@id='fbNewAssign']//a[@id='fbNewAssign_Close']");
  }

  /********************************************************************************************************************************
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async applyLeavepage(username: string, password: string) {}
  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("applyLeavepage");
  }
}

export default new applyLeavepage();
