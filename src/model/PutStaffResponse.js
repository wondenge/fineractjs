

import ApiClient from '../ApiClient';

/**
 * The PutStaffResponse model module.
 * @module model/PutStaffResponse
 * @version 1.0
 */
class PutStaffResponse {
    /**
     * Constructs a new <code>PutStaffResponse</code>.
     * PutStaffResponse
     * @alias module:model/PutStaffResponse
     */
    constructor() { 
        
        PutStaffResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutStaffResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutStaffResponse} obj Optional instance to populate.
     * @return {module:model/PutStaffResponse} The populated <code>PutStaffResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutStaffResponse();

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
PutStaffResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutStaffResponse.prototype['resourceId'] = undefined;






export default PutStaffResponse;

