

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApacheFineract);
  }
}(this, function(expect, ApacheFineract) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PostSurveySurveyNameApptableIdRequest', function() {
    it('should create an instance of PostSurveySurveyNameApptableIdRequest', function() {
      // uncomment below and update the code to test PostSurveySurveyNameApptableIdRequest
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be.a(ApacheFineract.PostSurveySurveyNameApptableIdRequest);
    });

    it('should have the property ppiHouseholdMembersCdQ1Householdmembers (base name: "ppi_household_members_cd_q1_householdmembers")', function() {
      // uncomment below and update the code to test the property ppiHouseholdMembersCdQ1Householdmembers
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property ppiHighestschoolCdQ2Highestschool (base name: "ppi_highestschool_cd_q2_highestschool")', function() {
      // uncomment below and update the code to test the property ppiHighestschoolCdQ2Highestschool
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property ppiBusinessoccupationCdQ3Businessoccupation (base name: "ppi_businessoccupation_cd_q3_businessoccupation")', function() {
      // uncomment below and update the code to test the property ppiBusinessoccupationCdQ3Businessoccupation
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property ppiHabitableroomsCdQ4Habitablerooms (base name: "ppi_habitablerooms_cd_q4_habitablerooms")', function() {
      // uncomment below and update the code to test the property ppiHabitableroomsCdQ4Habitablerooms
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property ppiFloortypeCdQ5Floortype (base name: "ppi_floortype_cd_q5_floortype")', function() {
      // uncomment below and update the code to test the property ppiFloortypeCdQ5Floortype
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property ppiLightingsourceCdQ6Lightingsource (base name: "ppi_lightingsource_cd_q6_lightingsource")', function() {
      // uncomment below and update the code to test the property ppiLightingsourceCdQ6Lightingsource
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property ppiIronsCdQ7Irons (base name: "ppi_irons_cd_q7_irons")', function() {
      // uncomment below and update the code to test the property ppiIronsCdQ7Irons
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property ppiMosquitonetsCdQ8Mosquitonets (base name: "ppi_mosquitonets_cd_q8_mosquitonets")', function() {
      // uncomment below and update the code to test the property ppiMosquitonetsCdQ8Mosquitonets
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property ppiTowelsCdQ9Towels (base name: "ppi_towels_cd_q9_towels")', function() {
      // uncomment below and update the code to test the property ppiTowelsCdQ9Towels
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property ppiFryingpansCdQ10Fryingpans (base name: "ppi_fryingpans_cd_q10_fryingpans")', function() {
      // uncomment below and update the code to test the property ppiFryingpansCdQ10Fryingpans
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "Date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostSurveySurveyNameApptableIdRequest();
      //expect(instance).to.be();
    });

  });

}));
