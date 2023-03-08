import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
import logger from "../../../../helper/logger.js";
import reporter from "../../../../helper/reporter.js";
import LoggingPage from "../pageObject/logging.page.js";
import applyLeavepage from "../pageObject/applyLeave.page.js";
import { info } from "winston";

const pages = {
  logging: LoggingPage,
  applyLeave: applyLeavepage,
};

Given(
  /^User is able login with admin profile in TOZ application$/,
  async () => {
    await LoggingPage.open();
    await LoggingPage.logging(
      process.env.DEV_ADMIN_USERNAME,
      process.env.DEV_ADMIN_PASSWORD
    );
    reporter.addStep(
      "TOZ_LM_001",
      "info",
      "The user is able to login with admin profile"
    );
  }
);

Given(
  /^User is able login with manager profile in TOZ application$/,
  async () => {
    await LoggingPage.open();
    await LoggingPage.logging(
      process.env.DEV_MNGR_USERNAME,
      process.env.DEV_MNGR_PASSWORD
    );
    reporter.addStep(
      "TOZ_LM_002",
      "info",
      "The user is able to login with manager profile"
    );
  }
);

Given(
  /^User is able login with employee profile in TOZ application$/,
  async () => {
    await LoggingPage.open();
    await LoggingPage.logging(
      process.env.DEV_EMP_USERNAME,
      process.env.DEV_EMP_PASSWORD
    );
    reporter.addStep(
      "TOZ_LM_003",
      "info",
      "The user is able to login with manager profile"
    );
  }
);

Then(/^the user is able to logout from the TOZ application$/, async () => {
  await LoggingPage.logout();
});

Then(
  /^The user is able to see global search option in top of the application$/,
  async () => {
    await applyLeavepage.GblSearch.isClickable();
    reporter.addStep(
      "TOZ_LM_001",
      "info",
      "The user is able to see the global search option and able to enter"
    );
  }
);

When(
  /^The user opened the (.*) form with (.*) profile$/,
  async (FormType, UserType) => {
    try {
      
    } catch (error) {
      
    }
    await applyLeavepage.GblSearch.setValue(FormType);
    await applyLeavepage.GblSearchSelector.click();
  }
);

Then(
  /^The user is able to see self, Team member & Employee radio buttons in form$/,
  async () => {
    let rediobtn = await applyLeavepage.btnSelfRedio
    chai.expect(rediobtn).to.be.exist;
    reporter.addStep(
      "TOZ_LM_001",
      "info",
      "The user is able to see Self radio button in form"
    );
    let rediobtn1 = await applyLeavepage.btnTeamMeRedio
    chai.expect(rediobtn1).to.be.exist;
    reporter.addStep(
      "TOZ_LM_001",
      "info",
      "The user is able to see Team member radio button in form"
    );
    let rediobtn2 = await applyLeavepage.btnEmpRedio
    chai.expect(rediobtn2).to.be.exist;
    reporter.addStep(
      "TOZ_LM_001",
      "info",
      "The user is able to see Employee radio button in form"
    );
  }
);

Then(
  /^The user is able to see self and Team member radio buttons in form$/,
  async () => {
    let rediobtn = await applyLeavepage.btnSelfRedio
    chai.expect(rediobtn).to.be.exist;
    reporter.addStep(
      "TOZ_LM_002",
      "info",
      "The user is able to see Self radio button in form"
    );
    let rediobtn1 = await applyLeavepage.btnTeamMeRedio
    chai.expect(rediobtn1).to.be.exist;
    reporter.addStep(
      "TOZ_LM_002",
      "info",
      "The user is able to see Team member radio button in form"
    );
  }
);

Then(
  /^The user is not able to see any radio button in form$/,
  async () => {
    // let rediobtn2 = await applyLeavepage.btnEmpRedio
    // chai.AssertionError(rediobtn2).not.to.be.exist;
    // reporter.addStep(
    //   "TOZ_LM_002",
    //   "info",
    //   "The user is not able to see employee radio button in form"
    // );
    // let rediobtn1 = await applyLeavepage.btnTeamMeRedio
    //  chai.expect(rediobtn1).not.to.be.exist;
    // reporter.addStep(
    //   "TOZ_LM_002",
    //   "info",
    //   "The user is not able to see Team member radio button in form"
    // );
    // let rediobtn = await applyLeavepage.btnSelfRedio
    // chai.expect(rediobtn).not.to.be.exist;
    // reporter.addStep(
    //   "TOZ_LM_003",
    //   "info",
    //   "The user is not able to see Self radio button in form"
    // );
  }
);

// Next scenario starts here********************************

Given(
  /^the user selected (.*) radio button in leave request form$/,
  async (ButtonType) => {
    await applyLeavepage.btnEmpRedio.click();
  }
);

Then(/^the user selected (.*) from the list item$/, async (LeaveType) => {
  await applyLeavepage.dpdnLeaveType.click();
  // await applyLeavepage.dpdnInputBox.click();
  
  await applyLeavepage.dpdnMdimInputBox.setValue(LeaveType);
  await applyLeavepage.selectFirstItemListdpdn.click();
  // await browser.pause(4000);
}
);

Then(
  /^the user selected (.*) and (.*) as today and tomorrow respectively$/,
  async (FromDate, ToDate) => {
    function getNextMonday(date = new Date()) {
      const dateCopy = new Date(date.getTime());
      const nextMonday = new Date(
        dateCopy.setDate(
          dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7),
        ),
      );
      return nextMonday;
    }
    function getNextTuesday(date = new Date()) {
      const dateCopy1 = new Date(date.getTime());
      const nextTuesday = new Date(
        dateCopy1.setDate(
          dateCopy1.getDate() + ((7 - dateCopy1.getDay() + 2) % 7 || 8),
        ),
      );
      return nextTuesday;
    }
    let ComingMonday = getNextMonday().toLocaleDateString("en-GB");
    let ComingTuesday = getNextTuesday().toLocaleDateString("en-GB");

/** today and tomorrow date coding starts here */
    function getTomorrow(date = new Date()) {
      const dateCopy = new Date(date.getTime());
      const nextMonday = new Date(dateCopy.setDate(dateCopy.getDate() + 3))
      return nextMonday;
    }
    let tomorrwDate = (getTomorrow().toLocaleDateString("en-GB"))
    console.log(`${tomorrwDate}`);
  

    function getToday(date = new Date()) {
      const dateCopy1 = new Date(date.getTime());
      const nextMonday1 = new Date(dateCopy1.setDate(dateCopy1.getDate() + 3))
      return nextMonday1;
    }
    let todayDate = (getToday().toLocaleDateString("en-GB")); 
    console.log(`${todayDate}`);

    await browser.pause(1000);
    await applyLeavepage.inptFromDate.setValue(todayDate);
    await browser.pause(1000);
    let fmdate = await applyLeavepage.inptFromDate.getValue();
    chai.expect(todayDate).to.equal(fmdate)
    reporter.addStep("TOZ_LM_002", "info", "The date format is correct as DD/MM/YYYY in From Date field")
    
    await applyLeavepage.inptToDate.setValue(tomorrwDate);
    let todate = await applyLeavepage.inptToDate.getValue();
    chai.expect(tomorrwDate).to.equal(todate);
    reporter.addStep("TOZ_LM_002", "info", "The date format is correct as DD/MM/YYYY in To Date field")
    await browser.pause(1000);

/** today and tomorrow date coding ends here */

    // await applyLeavepage.inptFromDate.setValue(ComingMonday);
    // let fmdate = await applyLeavepage.inptFromDate.getValue();
    // chai.expect(ComingMonday).to.equal(fmdate)
    // reporter.addStep("TOZ_LM_002", "info", "The date format is correct as DD/MM/YYYY in From Date field")
    // await applyLeavepage.inptToDate.setValue(ComingTuesday);
    // let todate = await applyLeavepage.inptToDate.getValue();
    // chai.expect(ComingTuesday).to.equal(todate)
    // reporter.addStep("TOZ_LM_002", "info", "The date format is correct as DD/MM/YYYY in To Date field")
    // await browser.pause(5000);
  }
);

Then(/^the user selected approver from manager list$/, async () => {
  
  let isappoverthere = await applyLeavepage.linkSelectApprover
  let isExisting = await isappoverthere.isExisting();

  if (isExisting === true) {
    await applyLeavepage.linkSelectApprover.click();
    await applyLeavepage.firstBoxItemSelectApprover.click();
    await applyLeavepage.btnAssign.click();
  } else {
    reporter.addStep("TOZ_LM_002", "info", "There is no approver link to select")
  }
});

Then(/^the user entered remarks textbox and Comments fields$/, async () => {
  
  await applyLeavepage.inptRemarksAL.setValue("Please approve my leave request");
  await applyLeavepage.inptCommentsAL.setValue("Please approve my leave request");
});

When(/^the user clicked on submit button$/, async () => {
  await applyLeavepage.btnSubmitAL.click();
  await applyLeavepage.btnconfirmYes.click();
});

Then(
  /^the user got success notification message in top of the application$/,
  async () => {
    await browser.pause(2000);
    await applyLeavepage.notytopalert.waitForDisplayed({timeout: 6000});
    let notificationMessage = await applyLeavepage.successNotifyMsg.getText();
    let isDisplayedTXT = await applyLeavepage.notytopalert.getText();
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>> ${isDisplayedTXT}`);
    chai.expect(notificationMessage).to.equal("Request submitted for approval successfully.");
    await browser.pause(2000);
    await browser.takeScreenshot();
    await browser.pause(4000);
    
    
  }
);

// Next scenario starts here********************************
