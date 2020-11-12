

import ApiClient from '../ApiClient';

/**
 * The PostSurveySurveyNameApptableIdResponse model module.
 * @module model/PostSurveySurveyNameApptableIdResponse
 * @version 1.0
 */
class PostSurveySurveyNameApptableIdResponse {
    /**
     * Constructs a new <code>PostSurveySurveyNameApptableIdResponse</code>.
     * PostSurveySurveyNameApptableIdResponse
     * @alias module:model/PostSurveySurveyNameApptableIdResponse
     */
    constructor() { 
        
        PostSurveySurveyNameApptableIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSurveySurveyNameApptableIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSurveySurveyNameApptableIdResponse} obj Optional instance to populate.
     * @return {module:model/PostSurveySurveyNameApptableIdResponse} The populated <code>PostSurveySurveyNameApptableIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSurveySurveyNameApptableIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostSurveySurveyNameApptableIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostSurveySurveyNameApptableIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostSurveySurveyNameApptableIdResponse.prototype['resourceId'] = undefined;






export default PostSurveySurveyNameApptableIdResponse;

