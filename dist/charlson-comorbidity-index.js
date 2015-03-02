// Generated by CoffeeScript 1.9.0

/**
calculates Child-Pugh score

@class CharlsonComorbidityIndex
@module HandlingLiverCirrhosis
 */

(function() {
  var CharlsonComorbidityIndex;

  CharlsonComorbidityIndex = (function() {

    /**
    constructor
    
    @constructor
    @param {Boolean} hasMyocardialInfarction
    @param {Boolean} hasCongestiveHeartFailure
    @param {Boolean} hasPeripheralVascularDisease
    @param {Boolean} hasCerebrovascularDisease
    @param {Boolean} hasDementia
    @param {Boolean} hasChronicPulmonaryDisease
    @param {Boolean} hasConnectiveTissueDisease
    @param {Boolean} hasPepticUlcerDisease
    @param {Boolean} hasMildLiverDisease
    @param {Boolean} hasDiabetes
    @param {Boolean} hasHemipledia
    @param {Boolean} hasRenalDisease
    @param {Boolean} hasDiabetesWithOrganDamage
    @param {Boolean} hasSolidTumor
    @param {Boolean} hasLeukemia
    @param {Boolean} hasLymphoma
    @param {Boolean} hasMetastaticSolidTumor
    @param {Boolean} hasAIDS
     */
    function CharlsonComorbidityIndex(_at_hasMyocardialInfarction, _at_hasCongestiveHeartFailure, _at_hasPeripheralVascularDisease, _at_hasCerebrovascularDisease, _at_hasDementia, _at_hasChronicPulmonaryDisease, _at_hasConnectiveTissueDisease, _at_hasPepticUlcerDisease, _at_hasMildLiverDisease, _at_hasDiabetes, _at_hasHemipledia, _at_hasRenalDisease, _at_hasDiabetesWithOrganDamage, _at_hasSolidTumor, _at_hasLeukemia, _at_hasLymphoma, _at_hasMetastaticSolidTumor, _at_hasModerateLiverDisease, _at_hasAIDS) {
      this.hasMyocardialInfarction = _at_hasMyocardialInfarction;
      this.hasCongestiveHeartFailure = _at_hasCongestiveHeartFailure;
      this.hasPeripheralVascularDisease = _at_hasPeripheralVascularDisease;
      this.hasCerebrovascularDisease = _at_hasCerebrovascularDisease;
      this.hasDementia = _at_hasDementia;
      this.hasChronicPulmonaryDisease = _at_hasChronicPulmonaryDisease;
      this.hasConnectiveTissueDisease = _at_hasConnectiveTissueDisease;
      this.hasPepticUlcerDisease = _at_hasPepticUlcerDisease;
      this.hasMildLiverDisease = _at_hasMildLiverDisease;
      this.hasDiabetes = _at_hasDiabetes;
      this.hasHemipledia = _at_hasHemipledia;
      this.hasRenalDisease = _at_hasRenalDisease;
      this.hasDiabetesWithOrganDamage = _at_hasDiabetesWithOrganDamage;
      this.hasSolidTumor = _at_hasSolidTumor;
      this.hasLeukemia = _at_hasLeukemia;
      this.hasLymphoma = _at_hasLymphoma;
      this.hasMetastaticSolidTumor = _at_hasMetastaticSolidTumor;
      this.hasModerateLiverDisease = _at_hasModerateLiverDisease;
      this.hasAIDS = _at_hasAIDS;
    }


    /**
    calculates score (number)
    
    @method getScore
    @return {Number} score
     */

    CharlsonComorbidityIndex.prototype.getScore = function() {
      var prop, props, scoreTable, scores, _i, _len;
      props = Object.keys(this).filter(function(name) {
        return name.slice(0, 3) === 'has';
      });
      scoreTable = {
        hasMyocardialInfarction: 1,
        hasCongestiveHeartFailure: 1,
        hasPeripheralVascularDisease: 1,
        hasCerebrovascularDisease: 1,
        hasDementia: 1,
        hasChronicPulmonaryDisease: 1,
        hasConnectiveTissueDisease: 1,
        hasPepticUlcerDisease: 1,
        hasMildLiverDisease: 1,
        hasDiabetes: 1,
        hasHemipledia: 2,
        hasRenalDisease: 2,
        hasDiabetesWithOrganDamage: 2,
        hasSolidTumor: 2,
        hasLeukemia: 2,
        hasLymphoma: 2,
        hasModerateLiverDisease: 3,
        hasMetastaticSolidTumor: 6,
        hasAIDS: 6
      };
      scores = 0;
      for (_i = 0, _len = props.length; _i < _len; _i++) {
        prop = props[_i];
        if (prop === 'hasDiabetes') {
          if (this.hasDiabetesWithOrganDamage) {
            continue;
          }
        }
        if (prop === 'hasMildLiverDisease') {
          if (this.hasModerateLiverDisease) {
            continue;
          }
        }
        if (prop === 'hasSolidTumor') {
          if (this.hasMetastaticSolidTumor) {
            continue;
          }
        }
        if (this[prop]) {
          scores += scoreTable[prop];
        }
      }
      return scores;
    };


    /**
    gets score description
    
    @method getScoreDescription
    @return {String} description
     */

    CharlsonComorbidityIndex.prototype.getScoreDescription = function() {
      var score;
      score = this.getScore();
      return this.constructor.getDescriptionByScore(score);
    };


    /**
    gets description by score
    
    @method getDescriptionByScore
    @private
    @static
    @param {Number} score
    @return {String} description
     */

    CharlsonComorbidityIndex.getDescriptionByScore = function(score) {
      if (score <= 0) {
        return 'Low';
      } else if (score <= 2) {
        return 'Medium';
      } else if (score <= 4) {
        return 'High';
      } else {
        return 'Very high';
      }
    };

    return CharlsonComorbidityIndex;

  })();

  module.exports = CharlsonComorbidityIndex;

}).call(this);
