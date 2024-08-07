const pause=require("../e2e/pages/pause.page");
const video=require("../e2e/pages/video.page");
const yt=require("../e2e/pages/yt.page");
Given(/^I am on the YouTube homepage$/,async () => {
	await yt.ytsearch();
});

When(/^I search for a video,interact with it$/,async () => {
 await video.videointeract();
});

Then(/^the video should be paused$/,async () => {
   await pause.videopause();
});
