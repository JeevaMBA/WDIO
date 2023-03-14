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

  public async btnRedio(ButtonType: string, Selector: string) {
    if (Selector === "Clickable") {
      await (
        await $(
          "//span[text()='" +
            ButtonType +
            "']/preceding-sibling::input[@type='radio'][1]"
        )
      ).isClickable();
    } else {
      await (
        await $(
          "//span[text()='" +
            ButtonType +
            "']/preceding-sibling::input[@type='radio'][1]"
        )
      ).click();
    }
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
  public async listSelectdpdn(LeaveType: string) {
    // title*= value has to be changed as per leave type and as of now it's dynamic value
    await $(
      "[class='bs-container btn-group bootstrap-select open'] div ul li a span[title*='" +
        LeaveType +
        " - (']"
    ).setValue(LeaveType);
  }

  public get selectFirstItemListdpdn() {
    // title*= value has to be changed as per leave type and as of now it's not dynamic value
    return $("//li[@class='active']//a[@role='option']");
  }

  // public async inputDate(DateFieldName: string, DateFieldValue: string, SelectorAction: string) {
  //   let SA = SelectorAction.trim().toLowerCase();
  //   if (SA ==="click") {
  //     await (await $("//div[normalize-space()=\'" + DateFieldName + "\'][1]/following::input[1]")).click();
  //   } else { if (SA ==="setvaluetext") {
  //     (await $("//div[normalize-space()=\'" + DateFieldName + "\'][1]/following::input[1]")).setValue(DateFieldValue);
  //   } else { if (SA ==="gettext") {
  //     (await $("//div[normalize-space()=\'" + DateFieldName + "\'][1]/following::input[1]")).getText();
  //   } else { throw new Error
  //   }
  //   };
  //   };
  // };
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

  public async dpdnPartialDaysListAD(PartialDayType: string) {
    //Ad meant All Day Only option to click
    (await $("ul li a [title='" + PartialDayType + "']")).click();
  }

  // public get dpdnPartialDaysListSDO() {
  //   //Ad meant Start Day Only option
  //   return $("ul li a [title='Start Day Only']");
  // }

  // public get dpdnPartialDaysListEDO() {
  //   //Ad meant End Day Only option
  //   return $("ul li a [title='End Day Only']");
  // }

  // public get dpdnPartialDaysListAED() {
  //   //Ad meant Start and End Day option
  //   return $("ul li a [title='Start and End Day']");
  // }

  public async dpdnHalfDay(HalfDayType: string) {
    await $(
      "//div[text()='Half Day']/..//span[@class='filter-option pull-left'][normalize-space()='" +
        HalfDayType +
        "']"
    ).click();
  }
  // public get dpdnHalfDay() {
  //   return $(
  //     "//div[text()='Half Day']/..//span[@class='filter-option pull-left'][normalize-space()='Morning']"
  //   );
  // }

  public async dpdnDuringType(DuringType: string) {
    (
      await $("ul[aria-expanded='true'] li a [title='" + DuringType + "']")
    ).click();
  }
  // public get dpdnDuringMorning() {
  //   return $("ul[aria-expanded='true'] li a [title='Morning']");
  // }

  // public get dpdnDuringAfternoon() {
  //   return $("ul[aria-expanded='true'] li a [title='Afternoon']");
  // }

  public get linkSelectApprover() {
    return $(
      "//div[text()=' Requested By']//..//div[text()='Select Approver']"
    );
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

  public async inputTestarea(placeholderText: string, EnterText: string) {
    await $("textarea[placeholder='" + placeholderText + "']").setValue(
      EnterText
    );
  }
  // public get inptRemarksAL() {
  //   return $("textarea[placeholder='Enter Remarks']");
  // }

  // public get inptCommentsAL() {
  //   return $("textarea[placeholder='Enter Comments']");
  // }

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
    return $("//div[@id='fbNewComp_feedback']//div");
  }

  public get successNotifyMsgTxt() {
    return $(
      "//div[@id='fbNewComp_feedback']//div[text()='A leave has been already applied in the specified duration']"
    );
  }

  public get iconCloseTopMsg() {
    return $("//div[@id='fbNewAssign']//a[@id='fbNewAssign_Close']");
  }

  public async toDoCards(CardName: string) {
    await (
      await $(
        "//a[@id='div_HmChange_Req'][normalize-space()='" + CardName + "']"
      )
    ).click();
  }

  public async toDoListAction(ActinType: string) {
    // ActionType can be either 'Approve' or 'Reject'
    let ActinType1 = ActinType.trim();
    if (ActinType1 === 'Approve') {
      await (await $("(//td//div[@title='" + ActinType1 + "'])[1]")).click();
    } else { if (ActinType1 === 'Reject') {
      await (await $("(//td//div[@title='" + ActinType1 + "'])[1]")).click();
      await (await $("#btnYesCofirm")).click();
      await (await $("textarea[placeholder='Enter Text']")).setValue('Automation Testing');
      await (await $("//*[@class='btn_gen btn_sml'][text()='Save']")).click();
    } else {
      throw Error(`It's invalid ActionType. Please use 'Approve' or 'Reject' instead of ${ActinType1}`)
    }    
  }
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
