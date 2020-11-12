

import ApiClient from '../ApiClient';

/**
 * The PostSurveySurveyNameApptableIdRequest model module.
 * @module model/PostSurveySurveyNameApptableIdRequest
 * @version 1.0
 */
class PostSurveySurveyNameApptableIdRequest {
    /**
     * Constructs a new <code>PostSurveySurveyNameApptableIdRequest</code>.
     * PostSurveySurveyNameApptableIdRequest
     * @alias module:model/PostSurveySurveyNameApptableIdRequest
     */
    constructor() { 
        
        PostSurveySurveyNameApptableIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSurveySurveyNameApptableIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSurveySurveyNameApptableIdRequest} obj Optional instance to populate.
     * @return {module:model/PostSurveySurveyNameApptableIdRequest} The populated <code>PostSurveySurveyNameApptableIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSurveySurveyNameApptableIdRequest();

            if (data.hasOwnProperty('ppi_household_members_cd_q1_householdmembers')) {
                obj['ppi_household_members_cd_q1_householdmembers'] = ApiClient.convertToType(data['ppi_household_members_cd_q1_householdmembers'], 'Number');
            }
            if (data.hasOwnProperty('ppi_highestschool_cd_q2_highestschool')) {
                obj['ppi_highestschool_cd_q2_highestschool'] = ApiClient.convertToType(data['ppi_highestschool_cd_q2_highestschool'], 'Number');
            }
            if (data.hasOwnProperty('ppi_businessoccupation_cd_q3_businessoccupation')) {
                obj['ppi_businessoccupation_cd_q3_businessoccupation'] = ApiClient.convertToType(data['ppi_businessoccupation_cd_q3_businessoccupation'], 'Number');
            }
            if (data.hasOwnProperty('ppi_habitablerooms_cd_q4_habitablerooms')) {
                obj['ppi_habitablerooms_cd_q4_habitablerooms'] = ApiClient.convertToType(data['ppi_habitablerooms_cd_q4_habitablerooms'], 'Number');
            }
            if (data.hasOwnProperty('ppi_floortype_cd_q5_floortype')) {
                obj['ppi_floortype_cd_q5_floortype'] = ApiClient.convertToType(data['ppi_floortype_cd_q5_floortype'], 'Number');
            }
            if (data.hasOwnProperty('ppi_lightingsource_cd_q6_lightingsource')) {
                obj['ppi_lightingsource_cd_q6_lightingsource'] = ApiClient.convertToType(data['ppi_lightingsource_cd_q6_lightingsource'], 'Number');
            }
            if (data.hasOwnProperty('ppi_irons_cd_q7_irons')) {
                obj['ppi_irons_cd_q7_irons'] = ApiClient.convertToType(data['ppi_irons_cd_q7_irons'], 'Number');
            }
            if (data.hasOwnProperty('ppi_mosquitonets_cd_q8_mosquitonets')) {
                obj['ppi_mosquitonets_cd_q8_mosquitonets'] = ApiClient.convertToType(data['ppi_mosquitonets_cd_q8_mosquitonets'], 'Number');
            }
            if (data.hasOwnProperty('ppi_towels_cd_q9_towels')) {
                obj['ppi_towels_cd_q9_towels'] = ApiClient.convertToType(data['ppi_towels_cd_q9_towels'], 'Number');
            }
            if (data.hasOwnProperty('ppi_fryingpans_cd_q10_fryingpans')) {
                obj['ppi_fryingpans_cd_q10_fryingpans'] = ApiClient.convertToType(data['ppi_fryingpans_cd_q10_fryingpans'], 'Number');
            }
            if (data.hasOwnProperty('Date')) {
                obj['Date'] = ApiClient.convertToType(data['Date'], 'Date');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'Date');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} ppi_household_members_cd_q1_householdmembers
 */
PostSurveySurveyNameApptableIdRequest.prototype['ppi_household_members_cd_q1_householdmembers'] = undefined;

/**
 * @member {Number} ppi_highestschool_cd_q2_highestschool
 */
PostSurveySurveyNameApptableIdRequest.prototype['ppi_highestschool_cd_q2_highestschool'] = undefined;

/**
 * @member {Number} ppi_businessoccupation_cd_q3_businessoccupation
 */
PostSurveySurveyNameApptableIdRequest.prototype['ppi_businessoccupation_cd_q3_businessoccupation'] = undefined;

/**
 * @member {Number} ppi_habitablerooms_cd_q4_habitablerooms
 */
PostSurveySurveyNameApptableIdRequest.prototype['ppi_habitablerooms_cd_q4_habitablerooms'] = undefined;

/**
 * @member {Number} ppi_floortype_cd_q5_floortype
 */
PostSurveySurveyNameApptableIdRequest.prototype['ppi_floortype_cd_q5_floortype'] = undefined;

/**
 * @member {Number} ppi_lightingsource_cd_q6_lightingsource
 */
PostSurveySurveyNameApptableIdRequest.prototype['ppi_lightingsource_cd_q6_lightingsource'] = undefined;

/**
 * @member {Number} ppi_irons_cd_q7_irons
 */
PostSurveySurveyNameApptableIdRequest.prototype['ppi_irons_cd_q7_irons'] = undefined;

/**
 * @member {Number} ppi_mosquitonets_cd_q8_mosquitonets
 */
PostSurveySurveyNameApptableIdRequest.prototype['ppi_mosquitonets_cd_q8_mosquitonets'] = undefined;

/**
 * @member {Number} ppi_towels_cd_q9_towels
 */
PostSurveySurveyNameApptableIdRequest.prototype['ppi_towels_cd_q9_towels'] = undefined;

/**
 * @member {Number} ppi_fryingpans_cd_q10_fryingpans
 */
PostSurveySurveyNameApptableIdRequest.prototype['ppi_fryingpans_cd_q10_fryingpans'] = undefined;

/**
 * @member {Date} Date
 */
PostSurveySurveyNameApptableIdRequest.prototype['Date'] = undefined;

/**
 * @member {Date} dateFormat
 */
PostSurveySurveyNameApptableIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostSurveySurveyNameApptableIdRequest.prototype['locale'] = undefined;






export default PostSurveySurveyNameApptableIdRequest;

