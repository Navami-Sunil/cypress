Feature: YouTube Video Interaction

  Scenario: Interact with a YouTube video
    Given I am on the YouTube homepage
    When I search for a video,interact with it
    Then the video should be paused
