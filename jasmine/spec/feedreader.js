
$(function() {


	/* make sure that the allFeeds variable has been defined and
	 * that it is not empty.*/
	describe('RSS Feeds', function() {

		it('Are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});
		/* test that loops through each feed and checks that URL
		 * is defined and not empty.*/
		it('Every feed has URL defined and the URL is not empty', function() {
			for (let i = 0; i < allFeeds.length; i++) {
				expect(allFeeds[i].url).toBeDefined();
				expect(allFeeds[i].url).not.toBe('');
			}
		});
		/* test loops through each feed in the allFeeds object and ensures
		 * it has a name defined and that the name is not empty */
		it('Every feed has name defined and the name is not empty', function() {
			for (let i = 0; i < allFeeds.length; i++) {
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name).not.toBe('');
			}
		});
	});
	/* New test suite named "The menu" */
	describe('The menu', function() {
			let iconList = document.querySelector('.icon-list');
			let body = document.body;

		/* a test that ensures the menu element is
		 * hidden by default.*/
		it('Menu element is hidden by default', function() {
			expect(body.classList.contains('menu-hidden')).toBe(true);
		});


		/* Write a test that ensures the menu changes
		 * visibility when the menu icon is clicked.*/
		it('Menu changes visibility when menu icon clicked', function() {

			iconList.click();
			expect(body.classList.contains('menu-hidden')).toBe(false);
			iconList.click();
			expect(body.classList.contains('menu-hidden')).toBe(true);
		});
	});


	/* New test suite named "Initial Entries" */
	describe('Initial Entries', function() {

		beforeEach(function(done) {
			loadFeed(0, done)
		});

		/* Test that ensures when the loadFeed  function is called
		 * and completes its work, there is at least a single .entry
		 * element within the .feed container.
		 */
		it('In .feed container there is at least a single .entry element', function() {
			expect(document.querySelector('.feed').children.length).toBeGreaterThan(0);
		});
	});

	/* New test suite named "New Feed Selection" */
	describe('New Feed Selection', function() {
		let feed;  //variable to store old feed information

		/* Test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.*/
		beforeEach(function(done) {
			loadFeed(0, function() {
				feed = document.querySelector('.feed').innerHTML;
				loadFeed(1, done);
			});
		});

		it('New feed is loaded by loadFeed function', function() {
			expect(document.querySelector('.feed').innerHTML).not.toBe(feed);
		});
	});

}());
