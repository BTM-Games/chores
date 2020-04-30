gdjs.mom_32fightCode = {};
gdjs.mom_32fightCode.GDstaticObjects1= [];
gdjs.mom_32fightCode.GDstaticObjects2= [];
gdjs.mom_32fightCode.GDmomcutcenObjects1= [];
gdjs.mom_32fightCode.GDmomcutcenObjects2= [];
gdjs.mom_32fightCode.GDheadObjects1= [];
gdjs.mom_32fightCode.GDheadObjects2= [];
gdjs.mom_32fightCode.GDhand1Objects1= [];
gdjs.mom_32fightCode.GDhand1Objects2= [];
gdjs.mom_32fightCode.GDhand2Objects1= [];
gdjs.mom_32fightCode.GDhand2Objects2= [];
gdjs.mom_32fightCode.GDplayerfightObjects1= [];
gdjs.mom_32fightCode.GDplayerfightObjects2= [];
gdjs.mom_32fightCode.GDrightupObjects1= [];
gdjs.mom_32fightCode.GDrightupObjects2= [];
gdjs.mom_32fightCode.GDleftupObjects1= [];
gdjs.mom_32fightCode.GDleftupObjects2= [];
gdjs.mom_32fightCode.GDleftsmashObjects1= [];
gdjs.mom_32fightCode.GDleftsmashObjects2= [];
gdjs.mom_32fightCode.GDmiddlesmashObjects1= [];
gdjs.mom_32fightCode.GDmiddlesmashObjects2= [];
gdjs.mom_32fightCode.GDrightsmashObjects1= [];
gdjs.mom_32fightCode.GDrightsmashObjects2= [];
gdjs.mom_32fightCode.GDpushgObjects1= [];
gdjs.mom_32fightCode.GDpushgObjects2= [];

gdjs.mom_32fightCode.conditionTrue_0 = {val:false};
gdjs.mom_32fightCode.condition0IsTrue_0 = {val:false};
gdjs.mom_32fightCode.condition1IsTrue_0 = {val:false};
gdjs.mom_32fightCode.condition2IsTrue_0 = {val:false};
gdjs.mom_32fightCode.condition3IsTrue_0 = {val:false};
gdjs.mom_32fightCode.condition4IsTrue_0 = {val:false};
gdjs.mom_32fightCode.conditionTrue_1 = {val:false};
gdjs.mom_32fightCode.condition0IsTrue_1 = {val:false};
gdjs.mom_32fightCode.condition1IsTrue_1 = {val:false};
gdjs.mom_32fightCode.condition2IsTrue_1 = {val:false};
gdjs.mom_32fightCode.condition3IsTrue_1 = {val:false};
gdjs.mom_32fightCode.condition4IsTrue_1 = {val:false};


gdjs.mom_32fightCode.mapOfGDgdjs_46mom_9532fightCode_46GDplayerfightObjects1Objects = Hashtable.newFrom({"playerfight": gdjs.mom_32fightCode.GDplayerfightObjects1});gdjs.mom_32fightCode.mapOfGDgdjs_46mom_9532fightCode_46GDhand1Objects1Objects = Hashtable.newFrom({"hand1": gdjs.mom_32fightCode.GDhand1Objects1});gdjs.mom_32fightCode.mapOfGDgdjs_46mom_9532fightCode_46GDplayerfightObjects1Objects = Hashtable.newFrom({"playerfight": gdjs.mom_32fightCode.GDplayerfightObjects1});gdjs.mom_32fightCode.mapOfGDgdjs_46mom_9532fightCode_46GDhand2Objects1Objects = Hashtable.newFrom({"hand2": gdjs.mom_32fightCode.GDhand2Objects1});gdjs.mom_32fightCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDheadObjects1.createFrom(runtimeScene.getObjects("head"));
gdjs.mom_32fightCode.GDleftsmashObjects1.createFrom(runtimeScene.getObjects("leftsmash"));
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
gdjs.mom_32fightCode.GDmomcutcenObjects1.createFrom(runtimeScene.getObjects("momcutcen"));
gdjs.mom_32fightCode.GDpushgObjects1.createFrom(runtimeScene.getObjects("pushg"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
gdjs.mom_32fightCode.GDstaticObjects1.createFrom(runtimeScene.getObjects("static"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "turning");
}{for(var i = 0, len = gdjs.mom_32fightCode.GDheadObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDheadObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].hide();
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.mom_32fightCode.GDmomcutcenObjects1.length !== 0 ? gdjs.mom_32fightCode.GDmomcutcenObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDleftsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDleftsmashObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "events");
}{for(var i = 0, len = gdjs.mom_32fightCode.GDstaticObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDstaticObjects1[i].setAnimationName("static");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mom_fight.wav", true, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cool");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "cool");
}{for(var i = 0, len = gdjs.mom_32fightCode.GDpushgObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDpushgObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "end");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "end");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.5, "end");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "255;255;255");
}}

}


{

gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDplayerfightObjects1.createFrom(runtimeScene.getObjects("playerfight"));

gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mom_32fightCode.mapOfGDgdjs_46mom_9532fightCode_46GDplayerfightObjects1Objects, gdjs.mom_32fightCode.mapOfGDgdjs_46mom_9532fightCode_46GDhand1Objects1Objects, false, runtimeScene, false);
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mombossfightcutcen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}}

}


{

gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDplayerfightObjects1.createFrom(runtimeScene.getObjects("playerfight"));

gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mom_32fightCode.mapOfGDgdjs_46mom_9532fightCode_46GDplayerfightObjects1Objects, gdjs.mom_32fightCode.mapOfGDgdjs_46mom_9532fightCode_46GDhand2Objects1Objects, false, runtimeScene, false);
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mombossfightcutcen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
gdjs.mom_32fightCode.condition2IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32fightCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.8, "events");
}if ( gdjs.mom_32fightCode.condition1IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition2IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8065012);
}
}}
}
if (gdjs.mom_32fightCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "435238__aris621__nasty-knife-stab.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "momroom", false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
gdjs.mom_32fightCode.condition2IsTrue_0.val = false;
gdjs.mom_32fightCode.condition3IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32fightCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.8, "events");
}if ( gdjs.mom_32fightCode.condition1IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition2IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8066204);
}
}if ( gdjs.mom_32fightCode.condition2IsTrue_0.val ) {
{
gdjs.mom_32fightCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}}
}
}
if (gdjs.mom_32fightCode.condition3IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "435238__aris621__nasty-knife-stab.wav", false, 100, 1);
}{gdjs.evtsExt__Gamejolt__ArchieveTrophy.func(runtimeScene, 120070, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "momroom", false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
gdjs.mom_32fightCode.GDrightupObjects1.createFrom(runtimeScene.getObjects("rightup"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDrightupObjects1.length !== 0 ? gdjs.mom_32fightCode.GDrightupObjects1[0] : null), 2000, 0);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.1, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.2, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide(false);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.3, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.4, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].clearForces();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDmiddlesmashObjects1.length !== 0 ? gdjs.mom_32fightCode.GDmiddlesmashObjects1[0] : null), 2000, 0);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].clearForces();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "events");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8070916);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
{gdjs.evtTools.sound.playSound(runtimeScene, "smash.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].clearForces();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.3, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDleftupObjects1.createFrom(runtimeScene.getObjects("leftup"));
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
gdjs.mom_32fightCode.GDrightupObjects1.createFrom(runtimeScene.getObjects("rightup"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDleftupObjects1.length !== 0 ? gdjs.mom_32fightCode.GDleftupObjects1[0] : null), 7000, 0);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDrightupObjects1.length !== 0 ? gdjs.mom_32fightCode.GDrightupObjects1[0] : null), 7000, 0);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.4, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].clearForces();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.5, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide(false);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.6, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.7, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide(false);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.8, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmiddlesmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmiddlesmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDmiddlesmashObjects1.length !== 0 ? gdjs.mom_32fightCode.GDmiddlesmashObjects1[0] : null), 2000, 0);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDrightsmashObjects1.length !== 0 ? gdjs.mom_32fightCode.GDrightsmashObjects1[0] : null), 2000, 0);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.2, "events");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8075764);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].clearForces();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.2, "events");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8076396);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "smash.wav", false, 100, 1);
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDleftsmashObjects1.createFrom(runtimeScene.getObjects("leftsmash"));
gdjs.mom_32fightCode.GDleftupObjects1.createFrom(runtimeScene.getObjects("leftup"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
gdjs.mom_32fightCode.GDrightupObjects1.createFrom(runtimeScene.getObjects("rightup"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDleftsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDleftsmashObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDleftupObjects1.length !== 0 ? gdjs.mom_32fightCode.GDleftupObjects1[0] : null), 7000, 0);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDrightupObjects1.length !== 0 ? gdjs.mom_32fightCode.GDrightupObjects1[0] : null), 7000, 0);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.1, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDleftsmashObjects1.createFrom(runtimeScene.getObjects("leftsmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDleftsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDleftsmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.2, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDleftsmashObjects1.createFrom(runtimeScene.getObjects("leftsmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDleftsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDleftsmashObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide(false);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.3, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDleftsmashObjects1.createFrom(runtimeScene.getObjects("leftsmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDleftsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDleftsmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.4, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDleftsmashObjects1.createFrom(runtimeScene.getObjects("leftsmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDleftsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDleftsmashObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide(false);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.5, "events");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDleftsmashObjects1.createFrom(runtimeScene.getObjects("leftsmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDleftsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDleftsmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDleftsmashObjects1.length !== 0 ? gdjs.mom_32fightCode.GDleftsmashObjects1[0] : null), 2000, 0);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDrightsmashObjects1.length !== 0 ? gdjs.mom_32fightCode.GDrightsmashObjects1[0] : null), 2000, 0);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.8, "events");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8080964);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDpushgObjects1.createFrom(runtimeScene.getObjects("pushg"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDpushgObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDpushgObjects1[i].hide(false);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "turning");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "turning");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "32;32;32");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "turning");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "97;97;97");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "turning");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "116;116;116");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "turning");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "197;197;197");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "turning");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "255;255;255");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "turning");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDmomcutcenObjects1.createFrom(runtimeScene.getObjects("momcutcen"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDmomcutcenObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDmomcutcenObjects1[i].hide();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "turning");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8084772);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDheadObjects1.createFrom(runtimeScene.getObjects("head"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDheadObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDheadObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].hide(false);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.1, "turning");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8085556);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "112;112;112");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.2, "turning");
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "turning");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8086572);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDleftsmashObjects1.createFrom(runtimeScene.getObjects("leftsmash"));
gdjs.mom_32fightCode.GDleftupObjects1.createFrom(runtimeScene.getObjects("leftup"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
gdjs.mom_32fightCode.GDrightupObjects1.createFrom(runtimeScene.getObjects("rightup"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDleftupObjects1.length !== 0 ? gdjs.mom_32fightCode.GDleftupObjects1[0] : null), 10000, 0);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDrightupObjects1.length !== 0 ? gdjs.mom_32fightCode.GDrightupObjects1[0] : null), 10000, 0);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDleftsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDleftsmashObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide(false);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.3, "turning");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8087572);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].clearForces();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.5, "turning");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8088204);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
gdjs.mom_32fightCode.GDleftsmashObjects1.createFrom(runtimeScene.getObjects("leftsmash"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDleftsmashObjects1.length !== 0 ? gdjs.mom_32fightCode.GDleftsmashObjects1[0] : null), 3000, 0);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDrightsmashObjects1.length !== 0 ? gdjs.mom_32fightCode.GDrightsmashObjects1[0] : null), 3000, 0);
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDleftsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDleftsmashObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDrightsmashObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDrightsmashObjects1[i].hide();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.7, "turning");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8089172);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.8, "turning");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8089756);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDmomcutcenObjects1.createFrom(runtimeScene.getObjects("momcutcen"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.mom_32fightCode.GDmomcutcenObjects1.length !== 0 ? gdjs.mom_32fightCode.GDmomcutcenObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.9, "turning");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8090364);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (10), "", 0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "smash.wav", false, 100, 1);
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4.99999999999, "turning");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8091148);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDmomcutcenObjects1.createFrom(runtimeScene.getObjects("momcutcen"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.mom_32fightCode.GDmomcutcenObjects1.length !== 0 ? gdjs.mom_32fightCode.GDmomcutcenObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "turning");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition1IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8091756);
}
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDhand1Objects1.createFrom(runtimeScene.getObjects("hand1"));
gdjs.mom_32fightCode.GDhand2Objects1.createFrom(runtimeScene.getObjects("hand2"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDhand1Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand1Objects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.mom_32fightCode.GDhand2Objects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDhand2Objects1[i].clearForces();
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "events");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "cool");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
gdjs.mom_32fightCode.condition2IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32fightCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) > -(1);
}if ( gdjs.mom_32fightCode.condition1IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition2IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8092788);
}
}}
}
if (gdjs.mom_32fightCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cool");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
gdjs.mom_32fightCode.condition2IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32fightCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) < 1;
}if ( gdjs.mom_32fightCode.condition1IsTrue_0.val ) {
{
{gdjs.mom_32fightCode.conditionTrue_1 = gdjs.mom_32fightCode.condition2IsTrue_0;
gdjs.mom_32fightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8093612);
}
}}
}
if (gdjs.mom_32fightCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cool");
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == -(1);
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDleftsmashObjects1.createFrom(runtimeScene.getObjects("leftsmash"));
gdjs.mom_32fightCode.GDplayerfightObjects1.createFrom(runtimeScene.getObjects("playerfight"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDplayerfightObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDplayerfightObjects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDleftsmashObjects1.length !== 0 ? gdjs.mom_32fightCode.GDleftsmashObjects1[0] : null), 2000, 0);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == -(1);
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32fightCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "cool");
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDplayerfightObjects1.createFrom(runtimeScene.getObjects("playerfight"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDplayerfightObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDplayerfightObjects1[i].clearForces();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32fightCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "turning");
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDmiddlesmashObjects1.createFrom(runtimeScene.getObjects("middlesmash"));
gdjs.mom_32fightCode.GDplayerfightObjects1.createFrom(runtimeScene.getObjects("playerfight"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDplayerfightObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDplayerfightObjects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDmiddlesmashObjects1.length !== 0 ? gdjs.mom_32fightCode.GDmiddlesmashObjects1[0] : null), 2000, 0);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32fightCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "cool");
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDplayerfightObjects1.createFrom(runtimeScene.getObjects("playerfight"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDplayerfightObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDplayerfightObjects1[i].clearForces();
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if (gdjs.mom_32fightCode.condition0IsTrue_0.val) {
gdjs.mom_32fightCode.GDplayerfightObjects1.createFrom(runtimeScene.getObjects("playerfight"));
gdjs.mom_32fightCode.GDrightsmashObjects1.createFrom(runtimeScene.getObjects("rightsmash"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDplayerfightObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDplayerfightObjects1[i].addForceTowardObject((gdjs.mom_32fightCode.GDrightsmashObjects1.length !== 0 ? gdjs.mom_32fightCode.GDrightsmashObjects1[0] : null), 2000, 0);
}
}}

}


{


gdjs.mom_32fightCode.condition0IsTrue_0.val = false;
gdjs.mom_32fightCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32fightCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.mom_32fightCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32fightCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "cool");
}}
if (gdjs.mom_32fightCode.condition1IsTrue_0.val) {
gdjs.mom_32fightCode.GDplayerfightObjects1.createFrom(runtimeScene.getObjects("playerfight"));
{for(var i = 0, len = gdjs.mom_32fightCode.GDplayerfightObjects1.length ;i < len;++i) {
    gdjs.mom_32fightCode.GDplayerfightObjects1[i].clearForces();
}
}}

}


{


{
}

}


}; //End of gdjs.mom_32fightCode.eventsList0x5b7028


gdjs.mom_32fightCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mom_32fightCode.GDstaticObjects1.length = 0;
gdjs.mom_32fightCode.GDstaticObjects2.length = 0;
gdjs.mom_32fightCode.GDmomcutcenObjects1.length = 0;
gdjs.mom_32fightCode.GDmomcutcenObjects2.length = 0;
gdjs.mom_32fightCode.GDheadObjects1.length = 0;
gdjs.mom_32fightCode.GDheadObjects2.length = 0;
gdjs.mom_32fightCode.GDhand1Objects1.length = 0;
gdjs.mom_32fightCode.GDhand1Objects2.length = 0;
gdjs.mom_32fightCode.GDhand2Objects1.length = 0;
gdjs.mom_32fightCode.GDhand2Objects2.length = 0;
gdjs.mom_32fightCode.GDplayerfightObjects1.length = 0;
gdjs.mom_32fightCode.GDplayerfightObjects2.length = 0;
gdjs.mom_32fightCode.GDrightupObjects1.length = 0;
gdjs.mom_32fightCode.GDrightupObjects2.length = 0;
gdjs.mom_32fightCode.GDleftupObjects1.length = 0;
gdjs.mom_32fightCode.GDleftupObjects2.length = 0;
gdjs.mom_32fightCode.GDleftsmashObjects1.length = 0;
gdjs.mom_32fightCode.GDleftsmashObjects2.length = 0;
gdjs.mom_32fightCode.GDmiddlesmashObjects1.length = 0;
gdjs.mom_32fightCode.GDmiddlesmashObjects2.length = 0;
gdjs.mom_32fightCode.GDrightsmashObjects1.length = 0;
gdjs.mom_32fightCode.GDrightsmashObjects2.length = 0;
gdjs.mom_32fightCode.GDpushgObjects1.length = 0;
gdjs.mom_32fightCode.GDpushgObjects2.length = 0;

gdjs.mom_32fightCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['mom_32fightCode'] = gdjs.mom_32fightCode;
