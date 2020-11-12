

import ApiClient from '../ApiClient';
import PutOfficesOfficeIdResponseChanges from './PutOfficesOfficeIdResponseChanges';

/**
 * The PutOfficesOfficeIdResponse model module.
 * @module model/PutOfficesOfficeIdResponse
 * @version 1.0
 */
class PutOfficesOfficeIdResponse {
    /**
     * Constructs a new <code>PutOfficesOfficeIdResponse</code>.
     * PutOfficesOfficeIdResponse
     * @alias module:model/PutOfficesOfficeIdResponse
     */
    constructor() { 
        
        PutOfficesOfficeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutOfficesOfficeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutOfficesOfficeIdResponse} obj Optional instance to populate.
     * @return {module:model/PutOfficesOfficeIdResponse} The populated <code>PutOfficesOfficeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutOfficesOfficeIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutOfficesOfficeIdResponseChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutOfficesOfficeIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutOfficesOfficeIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutOfficesOfficeIdResponseChanges} changes
 */
PutOfficesOfficeIdResponse.prototype['changes'] = undefined;






export default PutOfficesOfficeIdResponse;

