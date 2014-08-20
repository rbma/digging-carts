$ ->
	composerObject = {}
	videoObject = {}
	mixObject = {}
	additionalVideoObject = {}
	magazineObject = {}
	player1 = {}
	player2 = {}
	anchorElements = {}
	# colors = ['#5f41d5', '#ca0ab8', '#d5d041', '#d54141']


	initCount = 0


	init = ->
		setupBinds()
		$('h1.colors').fitText(0.7)
		$('.video-nav ul a.episode li').first().addClass "active"
		$('.story-nav ul a.additional-episode li').first().addClass "active"
		setTimeout(sendHeight(getHeight()), 500)
		removeSpinner()
		

	prepInit = (count) ->
		initCount = initCount + count
		#make sure all data is done before calling init
		if initCount == 4
			init()

	sendHeight = (height) ->
		message = {height: height}
		messageJSON = JSON.stringify(message)
		return window.parent.postMessage(messageJSON, '*')

	getHeight = ->
		return $(document.body).height() + 300

	setupYouTube = ->
		tag = document.createElement('script')
		tag.src = "https://www.youtube.com/iframe_api"
		firstScriptTag = document.getElementsByTagName('script')[0]
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

	
	window.onYouTubeIframeAPIReady = ->
		player1 = new YT.Player 'player',
			height: '390'
			width: '640'
			videoId: 'WYSupJ5r2zo'
			events: {
				"onReady": onPlayerReady1
			}
			playerVars: {
				modestbranding: true
				controls: 1
				showinfo: 0
				hd: 1

			}
		
		player2 = new YT.Player 'storyplayer',
			height: '390'
			width: '640'
			videoId: 'VsbG4pXrhr8'
			events: {
				"onReady": onPlayerReady2
			}
			playerVars: {
				modestbranding: true
				controls: 1
				showinfo: 0
				hd: 1
			}

	

	onPlayerReady1 = (event) ->
		resizeVid('#player')
		sendHeight(getHeight())

	onPlayerReady2 = (event) ->
		resizeVid('#storyplayer')
		sendHeight(getHeight())
		
	
	setupBinds = ->

		#resize
		window.addEventListener 'resize', ->
			resizeVid('#player')
			resizeVid('#storyplayer')
			sendHeight(getHeight())

		
	#FIXXXXXX!!!!!!
	goToComposers = (item) ->
		$('.composer-data').fadeIn()
		$('body,html').animate
			scrollTop: 0
		,50
		sendHeight(getHeight())


	changeVideo = (order, videoObject) ->
		#account for zero index
		video = videoObject[order].fields
		player1.cueVideoById(video.ytVideoId)
		$('.videos h1').empty().text video.episodeTitle
		$('.videos p.body').empty().text video.videoDescription
		$('.videos p.body').slideDown()
		sendHeight(getHeight())


	changeAdditionalVideo = (order, additionalVideoObject) ->
		#account for zero index
		video = additionalVideoObject[order].fields
		player2.cueVideoById(video.additionalYouTube)
		$('.stories h1').empty().text video.additionalVideoTitle
		#$('.stories p.body').empty().text video.description
		#$('.stories p.body').slideDown()
		sendHeight(getHeight())




	addVideoTitles = (object, target, type) ->
		
		if type == 'main'
			for video, i in object
				episode = video.fields.episodeNumber
				target.append("<a class='episode' href='#episode' data-order=#{i}><li>#{episode}</li>")
		
		else if type == 'additional'
			for video, i in object
				episode = video.fields.additionalVideoTitle
				target.append("<a class='additional-episode' href='#additional-episode' data-order=#{i}><li>#{episode}</li>")

	

	addComposers = (object) ->
		for composer, i in object
			person = composer.fields
			name = person.composerName
			img = person.image.fields.file.url
			composerData = "<div class='slide' data-order='#{i}'><img src='#{img}'/><h2>#{person.composerName}</h2><p>#{person.bio}</p></div>"
			$(".composers-wrap").append composerData
			$('.slide').first().addClass "active"
		


	addMixes = (object) ->
		for mix in object
			mixInfo = mix.fields
			name = mixInfo.artistName
			embed = mixInfo.rbmaRadioEmbedCode
			description = mixInfo.descriptions
			img = mixInfo.artistImage.fields.file.url
			mixData = "<div class='show'><img src='#{img}'/>#{embed}<p>#{description}</p></div>"
			$('.radio').append(mixData)
			sendHeight(getHeight())

	resizeVid = (vidPlayer) ->
		player = $(vidPlayer)
		winWidth = $(window).width()
		vidWidth = winWidth / 1.2
		ogWidth = player.attr('width') #extra box shadow pix
		ogHeight = player.attr('height')
		ratio = ogWidth / ogHeight

		player.attr('width', vidWidth)
		player.attr('height', vidWidth / ratio)

		diff = winWidth - vidWidth
		margin = diff / 2
		player.css
			marginLeft: margin

		sendHeight(getHeight())

	

	smoothScroll = (event, link, attr) ->
		event.preventDefault()
		scrollTo = link.attr 'href'

		location = $("#{scrollTo}").position().top

		if link.hasClass "active"
			return
		else
			$('nav ul a').each ->
				$(@).removeClass "active"

			link.addClass "active"

			$('body,html').animate
				scrollTop: location
			, 300



	removeSpinner = ->
		$('.spinner').remove()
		sendHeight(getHeight())
		


	getData = ->
		client = contentful.createClient
			accessToken: '38b8dbaf503a350d5722578c6547caca484511f7c78717736ac8f576832be4b0'
			space: 's9bc5ah7p1d5'

		#COMPOSERS
		client.entries({'content_type': '42CpXYSUms44OskS6wUU6I', 'include': 1}).done (data) ->
			addComposers(data)
			prepInit(1)
		
		#MAIN YT VIDS
		client.entries({'content_type':'36SuQSSPR6QmWOk8CseMC6', 'include': 1, 'order': 'fields.order'}).done (data) ->
			videoObject = data
			prepInit(1)
			addVideoTitles(videoObject, $('.video-nav ul'), 'main')

			$('a.episode').bind 'click', (event) ->
				event.preventDefault()
				$(@).parent().find('li').removeClass "active"
				$(@).find('li').addClass "active"
				order = $(@).data 'order'
				changeVideo(order, videoObject)

		#RADIO
		client.entries({'content_type':'2YpXtnGW80EEGgCUsSMmCc', 'include': 1}).done (data) ->
			prepInit(1)
			addMixes(data)

		#ADDITIONAL YOUTUBE VIDS
		client.entries({'content_type':'6fwxAcXrxK4yqyaMUiWwWY', 'include': 1, 'order': 'fields.order'}).done (data) ->
			prepInit(1)
			additionalVideoObject = data
			addVideoTitles(additionalVideoObject, $('.story-nav ul'), 'additional')

			$('a.additional-episode').bind 'click', (event) ->
				event.preventDefault()
				$(@).parent().find('li').removeClass "active"
				$(@).find('li').addClass "active"
				order = $(@).data 'order'
				changeAdditionalVideo(order, additionalVideoObject)

		$.ajax 'svg/svg.html',
			type: 'GET'
			dataType: 'html'
			success: (data, textStatus, jqXHR) ->
				$('.title svg path').attr("d", data)

		# #MAGAZINE
		# client.entries({'content_type': 'H38r2ErKi2cGueYeumikO', 'include': 1}).done (data) ->
		# 	prepInit(1)
		# 	magazineObject = data
		# 	addMagazineTitles(magazineObject)

		

	$('a.arrow-right').click (event) ->
		event.preventDefault()
		composers = $('.composers-wrap')
		totalComposers = composers.find('.slide').length
		currentSlide = $('.composers-wrap').find('.active')
		currentPos = currentSlide.data('order')
		console.log "Current:#{currentPos}, Total:#{totalComposers}"
		#zero index
		if currentPos <= totalComposers - 2
			nextSlide = $('.composers-wrap').find("[data-order=#{currentPos + 1}]")
			currentSlide.removeClass 'active'
			nextSlide.addClass 'active'
		else
			alert 'over'
			nextSlide = $('.composers-wrap').find("[data-order=0]")
			currentSlide.removeClass 'active'
			nextSlide.addClass 'active'



		
	#launch when ready	
	setupYouTube()
	getData()
	window.addEventListener('load', sendHeight(getHeight()));
	