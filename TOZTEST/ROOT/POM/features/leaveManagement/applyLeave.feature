Feature: Open a leave form using admin profile and submit a leave request

    # Background: Admin profile user login into the TOZ application
    # Given User is able login with <UserType> profile in TOZ application
    # When The user opened the <FormType> form with <UserType> profile

    @TestRun @debug
    Scenario Outline: <TESTID> : Verify that admin has option to submit a request on behalf of Team member & Employee

        Given User is able login with admin profile in TOZ application
        Then The user is able to see global search option in top of the application
        When The user opened the <FormType> form with <UserType> profile
        Then The user is able to see self, Team member & Employee radio buttons in form
        Then the user is able to logout from the TOZ application
        Examples:
            | TESTID     | FormType    | UserType   |
            | TOZ_LM_001 | Apply Leave | Admin user |

    @TestRun @debug
    Scenario Outline: <TESTID> : Verify that manager has option to submit a request on behalf of Team member

        Given User is able login with manager profile in TOZ application
        Then The user is able to see global search option in top of the application
        When The user opened the <FormType> form with <UserType> profile
        Then The user is able to see self and Team member radio buttons in form
        Then the user is able to logout from the TOZ application
        Examples:
            | TESTID     | FormType    | UserType     |
            | TOZ_LM_002 | Apply Leave | manager user |

    @TestRun @debug
    Scenario Outline: <TESTID> : Verify that employee has option to submit a request

        Given User is able login with employee profile in TOZ application
        Then The user is able to see global search option in top of the application
        When The user opened the <FormType> form with <UserType> profile
        Then The user is not able to see any radio button in form

        Examples:
            | TESTID     | FormType    | UserType      |
            | TOZ_LM_003 | Apply Leave | employee user |


    @TestRun @debug
    Scenario Outline: <TESTID> : Verify that employee is able to submit a self leave request for one day

        #Given the user selected <ButtonType> radio button in leave request form
        Then the user selected <LeaveType> from the list item
        Then the user selected <FromDate> and <ToDate> as today and tomorrow respectively
        Then the user entered remarks textbox and Comments fields
        Then the user selected approver from manager list
        When the user clicked on submit button
        Then the user got success notification message in top of the application
        Then the user is able to logout from the TOZ application

        Examples:
            | TESTID     | ButtonType | LeaveType    | FromDate | ToDate   |
            | TOZ_LM_004 | Self       | Annual Leave | today    | tomorrow |

#     Scenario Outline: <TESTID> : Verify that admin is able to submit a self leave request for second half day

#         #Given the user selected <ButtonType> radio button in leave request form
#         #Then the user selected <LeaveType> from the list item
#         # Then the user selected <From Date> and <To Date> as today and tomorrow respectively
#         # Then the user entered remarks textbox and Comments fields
#         # When the user clicked on submit button
#         # Then the user got success notification message in top of the application




# Examples:
#             | TESTID     | ButtonType   | LeaveType | From Date    | To Date|
#             | TOZ_LM_003 | Admin User | Apply Leave |