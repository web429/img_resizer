		//Resizer Variables
		let sizeUnit = document.getElementById("unit_select").value,
			format = document.getElementById("format_select").value;
		//Compress Variables
		let compressLevel = document.getElementById("compress_level_select").value,
			compress_format = document.getElementById("compress_format_select").value,
			compressnum = document.getElementById("customRange3").value;

		let scale_rate;

		let dropArea = document.getElementById('upload_box');
		const inpFile = document.getElementById("inpFile");
		const previewContainer = document.getElementById("imagePreview");
		const previewImage = previewContainer.querySelector(".image_preview_image");
		const previewDefaultText = previewContainer.querySelector(".image_preview__default_text");
		function selectFormat() {
			format = document.getElementById("format_select").value;
		}
		function selectSocial() {
			var social_select = document.getElementById("social_select").value;
			let social_width, social_height;
			switch(social_select) {
			  case "youtube_channel_icon":
			    social_width = 800;
			    social_height = 800;
			    break;
			  case "youtube_thumbnail":
			    social_width = 1280;
			    social_height = 720;
			    break;
			  case "youtube_channel_cover":
			    social_width = 2560;
			    social_height = 1440;
			    break;
			  case "facebook_profile_picture":
			    social_width = 180;
			    social_height = 180;
			    break;
			  case "facebook_cover_image":
			    social_width = 820;
			    social_height = 312;
			    break;
			  case "facebook_post_image":
			    social_width = 1200;
			    social_height = 630;
			    break;
			  case "facebook_event_image":
			    social_width = 1920;
			    social_height = 1080;
			    break;
			  case "twitter_profile_picture":
			    social_width = 400;
			    social_height = 400;
			    break;
			  case "twitter_header_size":
			    social_width = 1500;
			    social_height = 500;
			    break;
			  case "twitter_post_size":
			    social_width = 440;
			    social_height = 220;
			    break;
			  case "instragram_profile_picture":
			    social_width = 10;
			    social_height = 10;
			    break;
			  case "instragram_post_size":
			    social_width = 1080;
			    social_height = 1080;
			    break;
			  case "instragram_story_image":
			    social_width = 1080;
			    social_height = 1920;
			    break;
			  case "pinterest_profile_picture":
			    social_width = 110;
			    social_height = 110;
			    break;
			  case "pinterest_board_cover":
			    social_width = 222;
			    social_height = 150;
			    break;
			  case "linkedin_profile_image":
			    social_width = 165;
			    social_height = 165;
			    break;
			  case "linkedin_banner_size":
			    social_width = 1584;
			    social_height = 396;
			    break;
			  case "linkedin_company_logo":
			    social_width = 300;
			    social_height = 300;
			    break;
			  case "linkedin_company_cover":
			    social_width = 1536;
			    social_height = 768;
			    break;
			  case "turnblr_image_post":
			    social_width = 500;
			    social_height = 750;
			    break;
			  case "snapchat_image":
			    social_width = 1080;
			    social_height = 1920;
			    break;
			  case "whatsapp_profile_picture":
			    social_width = 192;
			    social_height = 192;
			    break;
			  case "tiktok_profile_picture":
			    social_width = 200;
			    social_height = 200;
			    break;
			  case "twitch_banner_size":
			    social_width = 900;
			    social_height = 480;
			    break;
			  case "etsy_shop_icon":
			    social_width = 500;
			    social_height = 500;
			    break;
			  case "etsy_cover_photo":
			    social_width = 1200;
			    social_height = 300;
			    break;
			  case "soundcloud_profile_picture":
			    social_width = 400;
			    social_height = 400;
			    break;
			  case "soundcloud_banner_size":
			    social_width = 2480;
			    social_height = 520;
			    break;
			  case "social_media_post":
			    social_width = 800;
			    social_height = 800;
			    break;
			  case "presentation":
			    social_width = 1024;
			    social_height = 768;
			    break;
			  case "blog_graphic":
			    social_width = 800;
			    social_height = 1200;
			    break;
			  default:
			    break;
			} 
			document.getElementById("social_width_size").value = social_width;
			document.getElementById("social_height_size").value = social_height;
			changeSocialWidth();
			changeSocialHeight();
		}
		function selectUnit() {
			sizeUnit = document.getElementById("unit_select").value;
			document.getElementById("width_unit").innerHTML = sizeUnit;
			document.getElementById("height_unit").innerHTML = sizeUnit;
			changeWidth();
			changeHeight();
		}
		function selectCompressFormat() {
			compress_format = document.getElementById("compress_format_select").value;
		}
		function selectLevel() {
			compressLevel = document.getElementById("compress_level_select").value;
			// console.log(compressLevel*100);
			document.getElementById("customRange3").value = compressLevel*100;
		}
		function rangechange() {
			compressnum = document.getElementById("customRange3").value;
		}
		function downloadImg() {
			var oImage = document.getElementById("image_preview_image");
		    var canvas = document.createElement("canvas");
		    var link = document.createElement('a');
  			
  			document.body.appendChild(link);
		    link.appendChild(canvas);
		    if (typeof canvas.getContext == "undefined" || !canvas.getContext) {
		        alert("browser does not support this action, sorry");
		        return false;
		    }
		    try {
		        var context = canvas.getContext("2d");
		        var width = oImage.width;
		        var height = oImage.height;
		        canvas.width = width;
		        canvas.height = height;
		        canvas.style.width = width + sizeUnit;
		        canvas.style.height = height + sizeUnit;
		        // canvas.download = "haha.jpg";
		        context.drawImage(oImage, 0, 0, width, height);
		        // console.log("canvas", canvas);
		        var target_format = "image/" + format;
		        var rawImageData = canvas.toDataURL(target_format);

		        rawImageData = rawImageData.replace("image/png", target_format)
		        if (rawImageData.length > 10) {
		        	link.href = rawImageData;
					link.download = 'download_compress.'+format;
					link.click();
					link.removeChild(canvas)
			        document.body.removeChild(link);
		        } else {
		        	alert("Selece Image...")
		        }
		    }
		    catch (err) {
		        document.body.removeChild(canvas);
		        alert("Sorry, can't download");
		    }

		    return true;
		}
		function downloadSocialImg() {
			var oImage = document.getElementById("image_preview_image");
		    var canvas = document.createElement("canvas");
		    var link = document.createElement('a');
  			
  			document.body.appendChild(link);
		    link.appendChild(canvas);
		    if (typeof canvas.getContext == "undefined" || !canvas.getContext) {
		        alert("browser does not support this action, sorry");
		        return false;
		    }
		    try {
		        var context = canvas.getContext("2d");
		        var width = oImage.width;
		        var height = oImage.height;
		        canvas.width = width;
		        canvas.height = height;
		        canvas.style.width = width + 'px';
		        canvas.style.height = height + 'px';
		        // canvas.download = "haha.jpg";
		        context.drawImage(oImage, 0, 0, width, height);
		        // console.log("canvas", canvas);
		        let target_format;
		        if (format) {
		        	target_format = "image/" + format;
		        } else {
		        	target_format = "image/jpeg";
		        }
		        var rawImageData = canvas.toDataURL(target_format);

		        rawImageData = rawImageData.replace("image/png", target_format)
		        if (rawImageData.length > 10) {
		        	link.href = rawImageData;
		        	if (format) {
		        		link.download = 'download_social.'+format;
		        	} else {
		        		link.download = 'download_social.jpg'
		        	}
					// link.download = 'download_compress.'+format;
					link.click();
					link.removeChild(canvas)
			        document.body.removeChild(link);
		        } else {
		        	alert("Selece Image...")
		        }
		    }
		    catch (err) {
		        document.body.removeChild(canvas);
		        alert("Sorry, can't download");
		    }

		    return true;
		}
		function downloadScaleImg() {
			var oImage = document.getElementById("image_preview_image");
		    var canvas = document.createElement("canvas");
		    var link = document.createElement('a');
  			
  			document.body.appendChild(link);
		    link.appendChild(canvas);
		    if (typeof canvas.getContext == "undefined" || !canvas.getContext) {
		        alert("browser does not support this action, sorry");
		        return false;
		    }
		    try {
		        var context = canvas.getContext("2d");
		        var width = oImage.width;
		        var height = oImage.height;
		        canvas.width = width;
		        canvas.height = height;
		        canvas.style.width = width + sizeUnit;
		        canvas.style.height = height + sizeUnit;
		        context.drawImage(oImage, 0, 0, width, height);
		        var target_format = "image/jpg";
		        var rawImageData = canvas.toDataURL(target_format);

		        rawImageData = rawImageData.replace("image/png", target_format);
		        if (rawImageData.length > 10) {
		        	link.href = rawImageData;
					link.download = 'download_scale.jpg';
					link.click();
					link.removeChild(canvas)
			        document.body.removeChild(link);
		        } else {
		        	alert("Selece Image...")
		        }
		    }
		    catch (err) {
		        document.body.removeChild(canvas);
		        alert("Sorry, can't download");
		    }

		    return true;
		}
		function downloadCompressImg() {
			// console.log(format, compressLevel, compressnum);
			const compress = Number(compressLevel);
			// console.log(format,compress);
			const compress_num = compressnum/100;
			// console.log(format, compress, compress_num);
			var oImage = document.getElementById("image_preview_image");
		    var canvas = document.createElement("canvas");
		    var link = document.createElement('a');
  			
  			document.body.appendChild(link);
		    link.appendChild(canvas);
		    if (typeof canvas.getContext == "undefined" || !canvas.getContext) {
		        alert("browser does not support this action, sorry");
		        return false;
		    }
		    try {
		        var context = canvas.getContext("2d");
		        var width = oImage.width;
		        var height = oImage.height;
		        canvas.width = width;
		        canvas.height = height;
		        // canvas.style.width = width + sizeUnit;
		        // canvas.style.height = height + sizeUnit;
		        // canvas.download = "haha.jpg";
		        context.drawImage(oImage, 0, 0, width, height);
		        // console.log("canvas", canvas);
		        var target_format = "image/" + compress_format;
		        var rawImageData = canvas.toDataURL("image/jpeg", compress_num);
		        // console.log("rawImageData", rawImageData);
		        rawImageData = rawImageData.replace("image/jpeg", target_format);
		        // console.log("rawImageData", rawImageData);
		        if (rawImageData.length > 10) {
		        	link.href = rawImageData;
					link.download = 'download_compress.'+format;
					link.click();
					link.removeChild(canvas)
			        document.body.removeChild(link);
		        } else {
		        	alert("Selece Image...")
		        }
		        
		    }
		    catch (err) {
		        document.body.removeChild(canvas);
		        alert("Sorry, can't download");
		    }

		    return true;
		}
		function changeSocialWidth() {
		    var y = document.getElementById("social_width_size").value;
		    // console.log("width", y, sizeUnit);
		    document.getElementById("image_preview_image").style.width = y+'px';
	  	}
	  	function changeSocialHeight() {
		    var y = document.getElementById("social_height_size").value;
		    // console.log("width", y, sizeUnit);
		    document.getElementById("image_preview_image").style.height = y+'px';
	  	}
		function changeWidth() {
		    var y = document.getElementById("width_size").value;
		    // console.log("width", y, sizeUnit);
		    document.getElementById("image_preview_image").style.width = y+sizeUnit;
	  	}
	  	function scaleChangeWidth() {
		    var w = document.getElementById("scale_width_size").value;
		    var y = w/rate;
		    // console.log("height", y, sizeUnit);
		    document.getElementById("image_preview_image").style.width = w+sizeUnit;
		    document.getElementById("image_preview_image").style.height = y+sizeUnit;
		    document.getElementById("scale_height_size").value = previewImage.height;
	  	}
	  	function scaleChangeHeight() {
		    var y = document.getElementById("scale_height_size").value;
		    var w = y*rate;
		    // console.log("height", y, sizeUnit);
		    document.getElementById("image_preview_image").style.width = w+sizeUnit;
		    document.getElementById("image_preview_image").style.height = y+sizeUnit;
		    document.getElementById("scale_width_size").value = previewImage.width;
	  	}
	  	function scalarRangechange() {
	  		var scalar = document.getElementById("scalar_customRange").value/100;
	  		// var w = document.getElementById("scale_width_size").value;
			// var y = document.getElementById("scale_height_size").value;
			var w = Math.floor(initialW * scalar);
			var y = Math.floor(initialY * scalar);
			document.getElementById("image_preview_image").style.width = w+'px';
		    document.getElementById("image_preview_image").style.height = y+'px';
		    document.getElementById("scalarRangeVal").innerHTML = scalar * 100 + "%";
		    $('#scale_width_size').val(w);
			$('#scale_height_size').val(y);
		}
	  	function changeHeight() {
		    var y = document.getElementById("height_size").value;
		    // console.log("height", y, sizeUnit);
		    document.getElementById("image_preview_image").style.height = y+sizeUnit;
	  	}
		function changeText() {
		    var y = document.getElementById("inpFile").value;
		    document.getElementById("selectedFileName").innerHTML = y;
	  	}
	  	document.getElementById("customButton").addEventListener("click", function(){
		  	document.getElementById("inpFile").click();  // trigger the click of actual file upload button
		});
		function importURL() {
			var y = document.getElementById("remoteURL").value;
			document.getElementById("selectedFileName").innerHTML = y;
			previewImage.setAttribute("src", y);
			// console.log("previewImage", previewImage);
			// console.log("size", previewImage.width, previewImage.style.width);
			// document.getElementById("image_preview_image").src = y;
		}
		
		
		dropArea.addEventListener('click', function() {
			inpFile.click();
		});
		
		function preventDefault(e) {
		    e.preventDefault();
		    e.stopPropagation();
		}
 		function addClass() {
 			dropArea.classList.add("highlight");
 		}
 		function removeClass() {
 			dropArea.classList.remove("highlight");
 		}
		dropArea.addEventListener('dragenter', preventDefault, false);
		dropArea.addEventListener('dragleave', preventDefault, false);
		dropArea.addEventListener('dragover', preventDefault, false);
		dropArea.addEventListener('drop', preventDefault, false);
		dropArea.addEventListener('dragenter', addClass, false);
		dropArea.addEventListener('dragleave', removeClass, false);
		dropArea.addEventListener('dragover', addClass, false);
		dropArea.addEventListener('drop', addClass, false);

		let initialW, initialY;

		inpFile.addEventListener("change", function() {
			const file = this.files[0];
			if (file) {
				const reader = new FileReader();
				previewDefaultText.style.display = "none";
				previewImage.style.display = "block";
				reader.addEventListener("load", function() {
					previewImage.setAttribute("src", this.result);
					// console.log(this)
				});
				initialW = previewImage.width;
				initialY = previewImage.height;
				// console.log("previewImage width", previewImage.width, previewImage.style.width);
				// console.log("previewImage height", previewImage.height, previewImage.width);
				rate = initialW/initialY;
				document.getElementById("width_size").value = previewImage.width;
				document.getElementById("scale_width_size").value = previewImage.width;
				document.getElementById("height_size").value = previewImage.height;
				document.getElementById("scale_height_size").value = previewImage.height;
				reader.readAsDataURL(file);
			} else {
				previewDefaultText.style.display = null;
				previewImage.style.display = null;
				previewImage.setAttribute("src", "")
			}
		})
		function handleDrop(e) {
		    var dt = e.dataTransfer,
		        files = dt.files;

		    if (files.length) {
		        handleFiles(files);
		    }
		    else {
        // check for img
	        var html = dt.getData('text/html'),
	            match = html && /\bsrc="?([^"\s]+)"?\s*/.exec(html),
	            url = match && match[1];
		        if (url) {
		            uploadImageFromURL(url);
		            return;
		        }
    		}
    	}	

		function validateImage(image) {
		    // check the type
		    var validTypes = ['image/jpeg', 'image/png', 'image/gif'];
		    if (validTypes.indexOf( image.type ) === -1) {
		        alert("Invalid File Type");
		        return false;
		    }
		    // check the size
		    var maxSizeInBytes = 10e6; // 10MB
		    if (image.size > maxSizeInBytes) {
		        alert("File too large");
		        return false;
		    }
		    return true;
		}
		function previewAnduploadImage(image) {
		    // container
		    if (image) {
						const reader = new FileReader();
						previewDefaultText.style.display = "none";
						previewImage.style.display = "block";
						reader.addEventListener("load", function() {
							previewImage.setAttribute("src", this.result);
						});
						rate = previewImage.width/previewImage.height;
						document.getElementById("width_size").value = previewImage.width;
						document.getElementById("scale_width_size").value = previewImage.width;
						document.getElementById("height_size").value = previewImage.height;
						document.getElementById("scale_height_size").value = previewImage.height;
						// console.log("size", previewImage.width, previewImage.style.width);
						reader.readAsDataURL(image);
					} else {
						previewDefaultText.style.display = null;
						previewImage.style.display = null;
						previewImage.setAttribute("src", "")
					}
		}
		dropArea.addEventListener('drop', handleDrop, false);
		function handleFiles(files) {
		    for (var i = 0, len = files.length; i < len; i++) {
		        if (validateImage(files[i]))
		            previewAnduploadImage(files[i]);
		    }
		}

		//Filter Functions
		let blur_num = document.getElementById("blur_customRange").value;
		let blurStatus = document.getElementById("blur_control").checked;
		let grayscale_num = document.getElementById("grayscale_customRange").value;
		let grayscaleStatus = document.getElementById("grayscale_control").checked;
		let brightness_num = document.getElementById("grayscale_customRange").value;
		let brightnessStatus = document.getElementById("grayscale_control").checked;
		let contrast_num = document.getElementById("contrast_customRange").value;
		let contrastStatus = document.getElementById("contrast_control").checked;
		let invert_num = document.getElementById("invert_customRange").value;
		let invertStatus = document.getElementById("invert_control").checked;
		let saturate_num = document.getElementById("saturate_customRange").value;
		let saturateStatus = document.getElementById("saturate_control").checked;
		let sepia_num = document.getElementById("sepia_customRange").value;
		let sepiaStatus = document.getElementById("sepia_control").checked;
		let opacity_num = document.getElementById("opacity_customRange").value;
		let opacityStatus = document.getElementById("opacity_control").checked;
		let huerotate_num = document.getElementById("huerotate_customRange").value;
		let huerotateStatus = document.getElementById("huerotate_control").checked;
		function huerotateRangechange() {
			if (huerotateStatus) {
				huerotate_num = document.getElementById("huerotate_customRange").value;
				if (previewImage) {
					previewImage.style.filter = "hue-rotate("+huerotate_num+"deg)";
				}
			} else {
				if (previewImage) {
					previewImage.style.filter = "hue-rotate(0deg)";
				}
			}
		}
		function handleHuerotate() {
			// console.log("chankge");
			huerotateStatus = document.getElementById("huerotate_control").checked;
			// console.log(huerotateStatus)
			if (huerotateStatus) {
				document.getElementById("huerotate_range").style.display = "block";
			} else {
				document.getElementById("huerotate_range").style.display = "none";
				if (previewImage) {
					previewImage.style.filter = "hue-rotate(0deg)";
				}
			}
		}
		function opacityRangechange() {
			if (opacityStatus) {
				opacity_num = document.getElementById("opacity_customRange").value;
				if (previewImage) {
					previewImage.style.filter = "opacity("+opacity_num+"%)";
				}
			} else {
				if (previewImage) {
					previewImage.style.filter = "opacity(0%)";
				}
			}
		}
		function handleOpacity() {
			// console.log("chankge");
			opacityStatus = document.getElementById("opacity_control").checked;
			// console.log(opacityStatus)
			if (opacityStatus) {
				document.getElementById("opacity_range").style.display = "block";
			} else {
				document.getElementById("opacity_range").style.display = "none";
				if (previewImage) {
					previewImage.style.filter = "opacity(100%)";
				}
			}
		}
		function sepiaRangechange() {
			if (sepiaStatus) {
				sepia_num = document.getElementById("sepia_customRange").value;
				if (previewImage) {
					previewImage.style.filter = "sepia("+sepia_num+"%)";
				}
			} else {
				if (previewImage) {
					previewImage.style.filter = "sepia(0%)";
				}
			}
		}
		function handleSepia() {
			// console.log("chankge");
			sepiaStatus = document.getElementById("sepia_control").checked;
			console.log(sepiaStatus)
			if (sepiaStatus) {
				document.getElementById("sepia_range").style.display = "block";
			} else {
				document.getElementById("sepia_range").style.display = "none";
				if (previewImage) {
					previewImage.style.filter = "sepia(0%)";
				}
			}
		}
		function saturateRangechange() {
			if (saturateStatus) {
				saturate_num = document.getElementById("saturate_customRange").value;
				if (previewImage) {
					previewImage.style.filter = "saturate("+saturate_num+"%)";
				}
			} else {
				if (previewImage) {
					previewImage.style.filter = "saturate(100%)";
				}
			}
		}
		function handleSaturate() {
			// console.log("chankge");
			saturateStatus = document.getElementById("saturate_control").checked;
			// console.log(saturateStatus)
			if (saturateStatus) {
				document.getElementById("saturate_range").style.display = "block";
			} else {
				document.getElementById("saturate_range").style.display = "none";
				if (previewImage) {
					previewImage.style.filter = "saturate(100%)";
				}
			}
		}
		function invertRangechange() {
			if (invertStatus) {
				invert_num = document.getElementById("invert_customRange").value;
				if (previewImage) {
					previewImage.style.filter = "invert("+invert_num+"%)";
				}
			} else {
				if (previewImage) {
					previewImage.style.filter = "invert(0%)";
				}
			}
		}
		function handleInvert() {
			// console.log("chankge");
			invertStatus = document.getElementById("invert_control").checked;
			// console.log(invertStatus)
			if (invertStatus) {
				document.getElementById("invert_range").style.display = "block";
			} else {
				document.getElementById("invert_range").style.display = "none";
				if (previewImage) {
					previewImage.style.filter = "invert(0%)";
				}
			}
		}
		function contrastRangechange() {
			if (contrastStatus) {
				contrast_num = document.getElementById("contrast_customRange").value;
				if (previewImage) {
					previewImage.style.filter = "contrast("+contrast_num+"%)";
				}
			} else {
				if (previewImage) {
					previewImage.style.filter = "contrast(0%)";
				}
			}
		}
		function handleContrast() {
			// console.log("chankge");
			contrastStatus = document.getElementById("contrast_control").checked;
			// console.log(contrastStatus)
			if (contrastStatus) {
				document.getElementById("contrast_range").style.display = "block";
			} else {
				document.getElementById("contrast_range").style.display = "none";
				if (previewImage) {
					previewImage.style.filter = "contrast(100%)";
				}
			}
		}
		function brightnessRangechange() {
			if (brightnessStatus) {
				brightness_num = document.getElementById("brightness_customRange").value;
				if (previewImage) {
					previewImage.style.filter = "brightness("+brightness_num+"%)";
				}
			} else {
				if (previewImage) {
					previewImage.style.filter = "brightness(100%)";
				}
			}
		}
		function handleBrightness() {
			// console.log("chankge");
			brightnessStatus = document.getElementById("brightness_control").checked;
			// console.log(brightnessStatus)
			if (brightnessStatus) {
				document.getElementById("brightness_range").style.display = "block";
			} else {
				document.getElementById("brightness_range").style.display = "none";
				if (previewImage) {
					previewImage.style.filter = "brightness(100%)";
				}
			}
		}
		function grayscaleRangechange() {
			if (grayscaleStatus) {
				grayscale_num = document.getElementById("grayscale_customRange").value;
				if (previewImage) {
					previewImage.style.filter = "grayscale("+grayscale_num+"%)";
				}
			} else {
				if (previewImage) {
					previewImage.style.filter = "grayscale(0%)";
				}
			}
		}
		function handleGrayscale() {
			// console.log("chankge");
			grayscaleStatus = document.getElementById("grayscale_control").checked;
			// console.log(grayscaleStatus)
			if (grayscaleStatus) {
				document.getElementById("grayscale_range").style.display = "block";
			} else {
				document.getElementById("grayscale_range").style.display = "none";
				if (previewImage) {
					previewImage.style.filter = "grayscale(0%)";
				}
			}
		}
			// compressnum = document.getElementById("customRange3").value,
			// compressnum = document.getElementById("customRange3").value;
		function blurRangechange() {
			if (blurStatus) {
				blur_num = document.getElementById("blur_customRange").value;
				if (previewImage) {
					previewImage.style.filter = "blur("+blur_num+"px)";
				}
			} else {
				if (previewImage) {
					previewImage.style.filter = "blur(0px)";
				}
			}
		}
		function handleBlur() {
			// console.log("chankge");
			blurStatus = document.getElementById("blur_control").checked;
			// console.log(blurStatus)
			if (blurStatus) {
				document.getElementById("blur_range").style.display = "block";
			} else {
				document.getElementById("blur_range").style.display = "none";
				if (previewImage) {
					previewImage.style.filter = "blur(0px)";
				}
			}
		}
		function downloadFilterImg() {
			var oImage = document.getElementById("image_preview_image");
		    var canvas = document.createElement("canvas");
		    var link = document.createElement('a');
  			
  			document.body.appendChild(link);
		    link.appendChild(canvas);
		    if (typeof canvas.getContext == "undefined" || !canvas.getContext) {
		        alert("browser does not support this action, sorry");
		        return false;
		    }
		    try {
		        var context = canvas.getContext("2d");
		        var width = oImage.width;
		        var height = oImage.height;
		        canvas.width = width;
		        canvas.height = height;
		        context.filter = "hue-rotate("+huerotate_num+"deg)" + "blur("+blur_num+"px)" + "opacity("+opacity_num+"%)" + "sepia("+sepia_num+"%)" + "saturate("+saturate_num+"%)" + "invert("+invert_num+"%)" + "contrast("+contrast_num+"%)" + "brightness("+brightness_num+"%)" + "grayscale("+grayscale_num+"%)";
		        // canvas.style.width = width + sizeUnit;
		        // canvas.style.height = height + sizeUnit;
		        // canvas.download = "haha.jpg";
		        context.drawImage(oImage, 0, 0, width, height);
		        // console.log("canvas", canvas);
		        // var target_format = "image/" + format;
		        var rawImageData = canvas.toDataURL("image/jpeg");

		        // rawImageData = rawImageData.replace("image/png", target_format)
		        if (rawImageData.length > 10) {
		        	link.href = rawImageData;
					link.download = 'download_filter.jpg';
					link.click();
					link.removeChild(canvas)
			        document.body.removeChild(link);
		        } else {
		        	alert("Selece Image...")
		        }
		    }
		    catch (err) {
		        document.body.removeChild(canvas);
		        alert("Sorry, can't download");
		    }

		    return true;
		}
		$(document).ready(function(){
			$('#blur_control').prop('checked', false);
			$('#blur_range').hide();
			$('#grayscale_control').prop('checked', false);
			$('#grayscale_range').hide();
			$('#brightness_control').prop('checked', false);
			$('#brightness_range').hide();
			$('#contrast_control').prop('checked', false);
			$('#contrast_range').hide();
			$('#invert_control').prop('checked', false);
			$('#invert_range').hide();
			$('#saturate_control').prop('checked', false);
			$('#saturate_range').hide();
			$('#sepia_control').prop('checked', false);
			$('#sepia_range').hide();
			$('#opacity_control').prop('checked', false);
			$('#opacity_range').hide();
			$('#huerotate_control').prop('checked', false);
			$('#huerotate_range').hide();
			$('#scalar_customRange').val(100);
			$('#width_size').val('');
			$('#height_size').val('');
			$('#scale_width_size').val('');social_width_size
			$('#scale_height_size').val('');
			$('#social_width_size').val('');
			$('#social_height_size').val('');
		});