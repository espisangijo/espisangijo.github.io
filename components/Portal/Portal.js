
// eslint-disable-next-line import/no-anonymous-default-export
import AFRAME from 'aframe';
AFRAME.registerComponent('portal', {
  schema: {
    title: {type: 'string'},
    url: {type: 'string'},
    portalImg: { type: 'string' },
    portalObj: { type: 'string'},
  },

    init() {
      console.log('start')

      var el = this.el;
      this.parent_position = el.getAttribute('position');

      var link = document.createElement('a-link');
      link.setAttribute('href', this.data.url);
      link.setAttribute('link', 'geometry', {primitive: 'circle', segments: 64, radius: 10, skipCache: true})
      link.setAttribute('color', "#000000")
      link.setAttribute('link', 'backgrounColor', "#000000")
      link.setAttribute('image', "https://thumbs.dreamstime.com/b/vr-image-futuristic-sci-fi-city-modern-fiction-skyscrapers-buildings-galaxy-discover-spacescape-119014727.jpg")
      link.setAttribute('scale', "0.1 0.1 0.001")
      link.setAttribute('visualAspectEnabled', false)
      link.setAttribute('mixin', 'portal')
      link.setAttribute('link', 'border', 'none')
      link.setAttribute('title', this.data.title)
      link.setAttribute('position',  "0 0 0");
      link.setAttribute('look-at', "#player");
      link.setAttribute('class', `portal-link`)

      var portalEffect = document.createElement('a-entity');
      portalEffect.setAttribute("obj-model", {obj: this.data.portalObj})
      portalEffect.setAttribute("material", {
        color: "#03c1e2",
        opacity: 0.6,
        depthWrite: false,
        shader: 'flat',
        transparent: false, 
        src: '#portalImg'
      })
      portalEffect.setAttribute("position", {x: 0, y: 0, z:-0.017})
      portalEffect.setAttribute("rotation", {x: 0, y: 90, z: 90})
      portalEffect.setAttribute("scale", {x: 3.116, y: 3.116, z: 3.116})
      portalEffect.setAttribute('animation', {
        property: 'object3D.rotation.x',
        from: 0, 
        to: 360, 
        dur: 10000, 
        loop: true, 
        easing: "linear"
      })
      

      var portalEffect2 = document.createElement('a-entity');
      portalEffect2.setAttribute("obj-model", {obj: this.data.portalObj})
      portalEffect2.setAttribute("material", {
        color: "#f37132",
        opacity: 0.6,
        depthWrite: false,
        shader: 'flat',
        transparent: false, 
        src: '#portalImg'
      })
      portalEffect2.setAttribute("position", {x: 0, y: 0, z:-0.017})
      portalEffect2.setAttribute("rotation", {x: 0, y: 90, z: 90})
      portalEffect2.setAttribute("scale", {x: 3.116, y: 3.116, z: 3.116})
      portalEffect2.setAttribute('animation', {
        property: 'object3D.rotation.x',
        from: 0, 
        to: 360, 
        dur: 5000, 
        loop: true, 
        easing: "linear"
      })


      link.appendChild(portalEffect)
      link.appendChild(portalEffect2)


      var portalPanel = document.getElementById("portal-component")
      console.log(`panel ${portalPanel}`)
      portalPanel.insertBefore(link, portalPanel.firstChild);
    },
    
    update() {
    },
  });