document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".left-side-bar");
    const toggleButton = document.querySelector(".arrow-button");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("expanded"); // Toggle class for collapse/expand
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const jsonData = {
        "_id": { "$oid": "63b64dc9e3b230ebb60a495d" },
        "title": "Technical Project Management",
        "description": "You can learn project management by applying the simple methods of project management...",
        "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
        "tasks": [
            {
                "task_title": "Explore the world of management",
                "task_description": "As a project manager, you play an important role in leading a project...",
                "assets": [
                    {
                        "asset_title": "Technical Project Management",
                        "asset_description": "Story of Alignment, Scope of Agility, etc.",
                        "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                        "asset_content_type": "video"
                    },
                    {
                        "asset_title": "Threadbuild",
                        "asset_description": "Watch the video and thread build...",
                        "asset_content": "",
                        "asset_content_type": "threadbuilder"
                    },
                    {
                        "asset_id": 18885,
                        "asset_title": "Structure you pointers ",
                        "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                        "asset_content": " ",
                        "asset_type": "input_asset",
                        "asset_content_type": "article"
                      },
                      {
                        "asset_id": 18886,
                        "asset_title": "4SA Method",
                        "asset_description": "To explore more read more",
                        "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                        "asset_type": "display_asset",
                        "asset_content_type": "article"
                      }
                ]
            }
        ]
    };

    const container = document.getElementById("section3");

    jsonData.tasks.forEach(task => {
        task.assets.forEach(asset => {
            const card = document.createElement("div");
            card.classList.add("card");
    
            // Card Header
            const cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header");
    
            const cardTitle = document.createElement("div");
            cardTitle.classList.add("card-title");
            const titleText = document.createElement("p");
            titleText.innerText = asset.asset_title;
            cardTitle.appendChild(titleText);
    
            const cardIcon = document.createElement("div");
            cardIcon.classList.add("card-icon");
            const iconImg = document.createElement("img");
            iconImg.src = "Asset/icons/help.svg";
            iconImg.alt = "";
            cardIcon.appendChild(iconImg);
    
            cardHeader.appendChild(cardTitle);
            cardHeader.appendChild(cardIcon);
            card.appendChild(cardHeader);
    
            // Card Description
            const cardDescription = document.createElement("div");
            cardDescription.classList.add("card-discription");
            const descriptionText = document.createElement("p");
            descriptionText.innerHTML = `<b style="font-size: 20px;">Description:</b> ${asset.asset_description}`;
            cardDescription.appendChild(descriptionText);
            card.appendChild(cardDescription);
    
            // Card Body (Asset Content)
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
    
            if (asset.asset_content_type === "video") {
                const videoFrame = document.createElement("iframe");
                videoFrame.src = asset.asset_content;
                videoFrame.width = "100%";
                videoFrame.height = "200";
                videoFrame.frameBorder = "0";
                videoFrame.allowFullscreen = true;
                cardBody.appendChild(videoFrame);
            } else {
                const assetImage = document.createElement("img");
                assetImage.src = ""; // Add a relevant image source if needed
                assetImage.alt = "";
                cardBody.appendChild(assetImage);
            }
    
            card.appendChild(cardBody);
            container.appendChild(card);
        });
    });
    });


  

  