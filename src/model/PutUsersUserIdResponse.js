

import ApiClient from '../ApiClient';
import PutUsersUserIdResponseChanges from './PutUsersUserIdResponseChanges';

/**
 * The PutUsersUserIdResponse model module.
 * @module model/PutUsersUserIdResponse
 * @version 1.0
 */
class PutUsersUserIdResponse {
    /**
     * Constructs a new <code>PutUsersUserIdResponse</code>.
     * PutUsersUserIdResponse
     * @alias module:model/PutUsersUserIdResponse
     */
    constructor() { 
        
        PutUsersUserIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutUsersUserIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutUsersUserIdResponse} obj Optional instance to populate.
     * @return {module:model/PutUsersUserIdResponse} The populated <code>PutUsersUserIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutUsersUserIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutUsersUserIdResponseChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutUsersUserIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutUsersUserIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutUsersUserIdResponseChanges} changes
 */
PutUsersUserIdResponse.prototype['changes'] = undefined;






export default PutUsersUserIdResponse;

