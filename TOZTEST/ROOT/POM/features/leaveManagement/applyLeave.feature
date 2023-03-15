Feature: Open a leave form using admin profile and submit a leave request

    # Background: Admin profile user login into the TOZ application
    # Given User is able login with <UserType> profile in TOZ application
    # When The user opened the <FormType> form with <UserType> profile

    @TestRun @debug
    Scenario Outline: <TESTID> : Verify that admin has option to submit a request on behalf of Team member & Employee

        Given User is able to login with admin profile in TOZ application
        Then The user is able to see global search option in top of the application
        When The user opened the <FormType> form through global search option
        Then The user is able to see self, Team member & Employee radio buttons in form
        Then the user is able to logout from the TOZ application
        Examples:
            | TESTID     | FormType    |
            | TOZ_LM_001 | Apply Leave |

    @TestRun @debug
    Scenario Outline: <TESTID> : Verify that manager has option to submit a request on behalf of Team member

        Given User is able to login with manager profile in TOZ application
        Then The user is able to see global search option in top of the application
        When The user opened the <FormType> form through global search option
        Then The user is able to see self and Team member radio buttons in form
        Then the user is able to logout from the TOZ application
        Examples:
            | TESTID     | FormType    |
            | TOZ_LM_002 | Apply Leave |

    @TestRun @debug
    Scenario Outline: <TESTID> : Verify that employee has option to submit a request

        Given User is able to login with employee profile in TOZ application
        Then The user is able to see global search option in top of the application
        When The user opened the <FormType> form through global search option
        Then The user is not able to see any radio button in form

        Examples:
            | TESTID     | FormType    |
            | TOZ_LM_003 | Apply Leave |


    @TestRun @debug
    Scenario Outline: <TESTID> : Verify that employee is able to submit a leave request for one day

        #Given the user selected <ButtonType> radio button in leave request form
        Then the user selected <LeaveType> from the list item
        Then the user selected <FromDate> and <ToDate> as today and tomorrow respectively
        Then the user entered <remarks> textbox and <Comments> fields
        Then the user selected approver from manager list
        When the user clicked on submit button
        Then the user got message as <MessageText> in top of the application
        Then the user is able to logout from the TOZ application

        Examples:
            | TESTID     | ButtonType | LeaveType    | FromDate  | ToDate  | remarks      | Comments     | MessageText                                  |
            | TOZ_LM_004 | Self       | Annual Leave | From Date | To Date | annual leave | annual leave | Request submitted for approval successfully. |

    @TestRun @debug
    Scenario Outline: <TESTID> : Verify that manager is able to reject leave request for employee

        Given User is able to login with manager profile in TOZ application
        Then the user navigated to ToDo list and opened the <CardName> list in ToDo
        Then the user clicked on <Action> button in first row of ToDo list
        Then the user got message as <MessageText> in top of the application
        Then the user is able to logout from the TOZ application

        Examples:
            | TESTID     | CardName       | Action | MessageText                             |
            | TOZ_LM_005 | Leave Approval | Reject | The Leave Request rejected successfully |


    @TestRun @debug
    Scenario Outline: <TESTID> : Verify that employee is able to apply first half day leave
        Given User is able to login with employee profile in TOZ application
        When The user opened the <FormType> form through global search option
        Then the user selected <LeaveType> from the list item
        Then the user selected <FromDate> and <ToDate> as today and tomorrow respectively

        Examples:
            | TESTID     | FormType    | LeaveType    | FromDate  | ToDate  |
            | TOZ_LM_006 | Apply Leave | Annual Leave | From Date | To Date |

# Examples:
#             | TESTID     | ButtonType   | LeaveType | From Date    | To Date|
#             | TOZ_LM_003 | Admin User | Apply Leave |