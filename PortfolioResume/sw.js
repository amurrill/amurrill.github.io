self.addEventListener('install',function(e){
	e.waitUntil(
		caches.open(MyResume-store').then(function(cache){
			return cache.addAll([
				'/PortfolioResume/',
				'/PortfolioResume/index.html',
				'/PortfolioResume/index.js',
				'/PortfolioResume/css/w3.css',
				'/PortfolioResume/images/code.jpg',
				'/PortfolioResume/images/computer-monitor.jpg'
				'/PortfolioResume/images/icon.png'
			]);	
		})
	);
});

self.addEventListener('fetch', function(e) {
	console.log(e.request.url);
	e.respondWith(
		catches.match(e.request).then(function(response){
			return response || fetch(e.request);
		})
	);
});

				
				