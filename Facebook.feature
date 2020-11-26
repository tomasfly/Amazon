Feature: Facebook registation

# Functional tests
Scenario: Register to Facebook using email
Scenario: Register to Facebook using email and SMS
Scenario: Registration form layout check
Scenario: Registration form field validation check

# Performance tests
Scenario: Load - Simulate registration for 20 Million concurrent users
Scenario: Stress - Simulate registration for 50 Million concurrent users

# Cross browser tests
Scenario: Register using chrome
Scenario: Register using FF
Scenario: Register using Edge

# Accessibility test
Scenario: Register to facebook using very large fonts

# Security test
Scenario: SQL Injection testing
Scenario: Penetration testing
Scenario: Vulnerability Scanning
Scenario: Risk Assessment

# Localization
Scenario: Register using French
Scenario: Register using English
Scenario: Register using Spanish

# Negative testing
Scenario: User cannot register if requried fields are not completed
Scenario: User cannot register if email is not formatted correctly
Scenario: User cannot register if phone number is not correct
