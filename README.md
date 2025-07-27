Really fun test, thank you!

Created this in JavaScript and used Playwright so it could be opened in any IDE with JS.


I have to say some selectors and page loading took a bit of getting used to and making sure the selectors are stable but this test finally goes through the whole flow in both:

https://demo-report-base-self-service.operengineering.com/
and
https://demo-report-delta-self-service.operengineering.com/

simultaneously and checks if the report at the end loads properly which seems to be the main concern/defect I assume.
I have left comments which explain the steps taken through the test.

There are minor issues with the test platform I've listed in a separate file for manual test.
