var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BaseEnemy = (function (_super) {
    __extends(BaseEnemy, _super);
    function BaseEnemy(name) {
        var _this = _super.call(this, name) || this;
        //撞击主角所造成的爆炸伤害
        _this.expoldeAtk = 20;
        return _this;
    }
    BaseEnemy.prototype.init = function () {
        this.setScale(0.5);
        this.appear(100, 100);
        this.flySpeed = 0.1 + Math.random() * 0.2;
        this.bulletSpeed = this.flySpeed + 0.3 * Math.random() + 0.1;
        this.shootInterval = Math.random() * 500 + 500;
        this.score = 1;
        this.bulletPositions = [
            { x: -20, y: 20 },
            { x: 20, y: 20 }
        ];
    };
    BaseEnemy.prototype.move = function (time) {
        this.y += this.flySpeed * time;
    };
    /*子弹发射*/
    BaseEnemy.prototype.shoot = function (bulletContainer, time) {
        // this.bulletPositions.forEach(position => {
        var _this = this;
        // })
        if (!this.addShootTime(time)) {
            return;
        }
        this.bulletPositions.forEach(function (position) {
            var bullet = new BaseBullet('bullet_ball_png', _this);
            bullet.show(position);
            bulletContainer.addBullet(bullet);
        });
    };
    return BaseEnemy;
}(BasePlane));
__reflect(BaseEnemy.prototype, "BaseEnemy");
//# sourceMappingURL=BaseEnemy.js.map