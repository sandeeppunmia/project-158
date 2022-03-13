AFRAME.registerComponent("poster",{
    init:function(){
        this.placesContainer = this.el
        this.createCards();
    },
    createCards:function(){
        const thumbnailRef = [
            {
                id:"spiderman",
                title:"SpiderMan",
                url:"./assets/spiderman.jpg"
            },
            {
                id:"superman",
                title:"Superman",
                url:"./assets/superman.jpg"
            },
            {
                id:"outer-space",
                title:"Outer Space",
                url:"./assets/outer_space.jpg"
            },
            {
                id:"captain_aero",
                title:"Captain Aero",
                url:"./assets/captain_aero.jpg"
            }
        ]
        let previousXPosition = -60
        for(var item of thumbnailRef){
            const posX = previousXPosition + 25
            const posY = 10
            const posZ = -40
            const position = {x:posX,y:posY,z:posZ}
            previousXPosition = posX
            const borderEl = this.createBorder(position,item.id)
            const thumbnail = this.createThumbnail(item)
            borderEl.appendChild(thumbnail)
            const titleEl = this.createTitleEl(position,item)
            borderEl.appendChild(titleEl)
            this.placesContainer.appendChild(borderEl)
        }
    },

    createBorder:function(position,id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            innerWidth:"2",
            outerWidth:"4",
            innerHeight:"6",
            outerHeight:"8"
        })
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{
            color:"#fff",
            opacity:1
        })
        entityEl.setAttribute("cursor-listener",{})
        return entityEl
    },
    createThumbnail:function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:18,
            height:20
        })
        entityEl.setAttribute("material",{src:item.url})
        return entityEl
    },
    createTitleEl(position,item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:70,
            color:"#e65100",
            value:item.title
        })
        const elPosition = position;
        elPosition.y-20
        entityEl.setAttribute("position",elPosition)
        entityEl.setAttribute("visible",true)
        return entityEl
    }
})