Feature: Open a leave form using admin profile and submit a leave request

  @TestRun @debug
  Scenario Outline: <TESTID> : Verify that admin has option to submit a request on behalf of Team member & Employee
    Given User is able to login with admin profile in TOZ application
    Then The user is able to see global search option in top of the application
    When The user opened the <FormType> form through global search option
    Then The user is able to see self, Team member & Employee radio buttons in form

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
