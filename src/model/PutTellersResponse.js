

import ApiClient from '../ApiClient';
import PutTellersResponseChanges from './PutTellersResponseChanges';

/**
 * The PutTellersResponse model module.
 * @module model/PutTellersResponse
 * @version 1.0
 */
class PutTellersResponse {
    /**
     * Constructs a new <code>PutTellersResponse</code>.
     * PutTellersResponse
     * @alias module:model/PutTellersResponse
     */
    constructor() { 
        
        PutTellersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTellersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTellersResponse} obj Optional instance to populate.
     * @return {module:model/PutTellersResponse} The populated <code>PutTellersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTellersResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutTellersResponseChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutTellersResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutTellersResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutTellersResponseChanges} changes
 */
PutTellersResponse.prototype['changes'] = undefined;






export default PutTellersResponse;

