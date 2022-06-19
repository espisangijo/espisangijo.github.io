/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable */
// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Entity, Scene } from 'aframe-react' 
import Head from 'next/head'

import Portal from '../../components/Portal/PortalComponent';
// import stopSign from '../../assets/objects/StopSign.obj'

function XR() {
    const [appRendered, setAppRendered] = useState(false)
    const [assets, setAssets] = useState({
        portalPreview: undefined,
        portalImg: undefined,
        portalObj: undefined,
    })
    let portalPreview, portalImg, portalObj = null
    useEffect(() => {
        if (typeof window !== "undefined") {
            console.log('window loaded')
            try {
                require('aframe')
                require('aframe-extras')
                require('aframe-environment-component')
                require('aframe-look-at-component')
                require('../../assets/additive')
                require('../../components/Portal/Portal')
            } catch (error) {
               console.error(error) 
            }  

            setAssets({
                portalPreview: require('../../assets/img/home.png'),
                portalImg: require('../../assets/img/portal.png'),
                portalObj: require('../../assets/objects/portal.obj')
            })

            setAppRendered(true)
        }
    },[])
  return (
    <div style={{ height: '100%', width: '100%' }}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>The Settlement</title>
        </Head>
        
        {appRendered && (<Scene
          loading-screen="dotsColor: green; backgroundColor: white"
          environment="preset: starry; groundColor: #445; grid: cross"
          cursor="rayOrigin: mouse"
          raycaster="objects:[clickable]"
        >
            <a-assets>
                <img id="portalPreview" src={assets.portalPreview}></img>
                <img id="portalImg" src={assets.portalImg}></img>
                <a-asset-item id="portalObj" src={assets.portalObj}></a-asset-item>

                <a-mixin id="portal"
                    material="backgroundColor: #03c1e2; transparent: true"
                    raycastable
                    animation__mouseenterscale="property: scale; from: 1 1 1; to: 1.1 1.1 1.1; easing: easeInOutQuad; dir: alternate; loop: true; startEvents: mouseenter; dur: 1000; pauseEvents: mouseleave"></a-mixin>
                    <a-mixin id="portalEffect"
                    additive=""
                    obj-model={portalObj}
                    material="color: #03c1e2; opacity: 0.6; depthWrite: false; shader: flat; transparent: true; src: #portalImg" 
                    position="0 0 -0.017" 
                    rotation="0 90 90" 
                    scale="3.116 3.116 3.116"
                    animation="property: object3D.rotation.x; from: 0; to: 6.283185; dur: 10000; loop: true; easing: linear"
                    ></a-mixin>
            </a-assets>
            <Entity
                id="rig"
                movement-controls="constrainToNavMesh: true; speed: 0.6; fly: false"
                position="0 0 0"
                rotation="0 90 0"
            >
                <Entity
                id="player"
                camera="userHeight: 1.6"
                look-controls="pointerLockEnabled: true"
                position="0 1.6 0"
                >

                <a-cursor
                    id="cursor"
                    cursor="rayOrigin: mouse"
                    position="0 0 -1"
                    geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                    material="color: black; shader: flat"
                >
                </a-cursor>
                </Entity>
                {/* <Entity id="left-hand" laser-controls="hand: left"></Entity>
                <Entity id="right-hand" laser-controls="hand: right"></Entity> */}
            </Entity>

            {/* <Entity gltf-model="#stopSign" position="2 1 2" scale="1 1 1"></Entity> */}
            <Portal
            title="Exit XR"
                url="/"
                portalPreview="#portalPreview"
                portalImg="#portalImg"
                portalObj="#portalObj" />
        </Scene>)}
    </div>
  )
}

export default XR