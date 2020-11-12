

import ApiClient from '../ApiClient';
import PutAccountsChanges from './PutAccountsChanges';

/**
 * The PutAccountsTypeAccountIdResponse model module.
 * @module model/PutAccountsTypeAccountIdResponse
 * @version 1.0
 */
class PutAccountsTypeAccountIdResponse {
    /**
     * Constructs a new <code>PutAccountsTypeAccountIdResponse</code>.
     * PutAccountsTypeAccountIdResponse
     * @alias module:model/PutAccountsTypeAccountIdResponse
     */
    constructor() { 
        
        PutAccountsTypeAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutAccountsTypeAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutAccountsTypeAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/PutAccountsTypeAccountIdResponse} The populated <code>PutAccountsTypeAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutAccountsTypeAccountIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutAccountsChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutAccountsTypeAccountIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutAccountsChanges} changes
 */
PutAccountsTypeAccountIdResponse.prototype['changes'] = undefined;






export default PutAccountsTypeAccountIdResponse;

