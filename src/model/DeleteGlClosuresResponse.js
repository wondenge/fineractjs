

import ApiClient from '../ApiClient';

/**
 * The DeleteGlClosuresResponse model module.
 * @module model/DeleteGlClosuresResponse
 * @version 1.0
 */
class DeleteGlClosuresResponse {
    /**
     * Constructs a new <code>DeleteGlClosuresResponse</code>.
     * DeleteGlClosuresResponse
     * @alias module:model/DeleteGlClosuresResponse
     */
    constructor() { 
        
        DeleteGlClosuresResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteGlClosuresResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteGlClosuresResponse} obj Optional instance to populate.
     * @return {module:model/DeleteGlClosuresResponse} The populated <code>DeleteGlClosuresResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteGlClosuresResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
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
DeleteGlClosuresResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteGlClosuresResponse.prototype['resourceId'] = undefined;






export default DeleteGlClosuresResponse;

