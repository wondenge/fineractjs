

import ApiClient from '../ApiClient';

/**
 * The PutGlClosuresResponse model module.
 * @module model/PutGlClosuresResponse
 * @version 1.0
 */
class PutGlClosuresResponse {
    /**
     * Constructs a new <code>PutGlClosuresResponse</code>.
     * PutGlClosuresResponse
     * @alias module:model/PutGlClosuresResponse
     */
    constructor() { 
        
        PutGlClosuresResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutGlClosuresResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutGlClosuresResponse} obj Optional instance to populate.
     * @return {module:model/PutGlClosuresResponse} The populated <code>PutGlClosuresResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutGlClosuresResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutGlClosuresResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutGlClosuresResponse.prototype['resourceId'] = undefined;

/**
 * @member {String} comments
 */
PutGlClosuresResponse.prototype['comments'] = undefined;






export default PutGlClosuresResponse;

