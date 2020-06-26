// https://www.youtube.com/watch?v=H-9jCNhLe-Q
const particles =[];

function setup(){
    let cnv = createCanvas(window.innerWidth, window.innerHeight);
    cnv.parent('canvas1');
    const particlesLength = Math.floor(window.innerWidth/15);
    for (let i=0; i<particlesLength; i++){
        particles.push(new Particle());
    }
}

function draw(){
    background('255,255,255')
    particles.forEach((p, index)=>{
        p.update();
        p.draw();
        p.checkParticle(particles.slice(index));
    });

}

class Particle{
    constructor(){
        //position
        this.pos = createVector(random(width), random(height));
        //velocity
        this.vel = createVector(random(-2,2), random(-2, 2));
        //size
        this.size = 10;
    }
    // update the movements bu adding velocity
    update(){
        this.pos.add(this.vel);
        this.edges();
    }

    //draw single particle 
    draw(){
        noStroke();
        fill('rgba(0,0,0,0.3)');
        circle(this.pos.x, this.pos.y, this.size);
    }

    //detect edges
    edges(){
        if(this.pos.x< 0 || this.pos.x>width){
            this.vel.x *= -1;
        }
        if(this.pos.y< 0 || this.pos.y>height){
            this.vel.y *= -1;
        }
    }
    //Connect the particles
    checkParticle(particles){
        particles.forEach(particle =>{
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d<120){
                stroke('rgba(0,0,0,0.3)')
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

            }
        });
    }
}