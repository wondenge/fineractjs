

import ApiClient from '../ApiClient';

/**
 * The DeleteAccountingRulesResponse model module.
 * @module model/DeleteAccountingRulesResponse
 * @version 1.0
 */
class DeleteAccountingRulesResponse {
    /**
     * Constructs a new <code>DeleteAccountingRulesResponse</code>.
     * DeleteAccountingRulesResponse
     * @alias module:model/DeleteAccountingRulesResponse
     */
    constructor() { 
        
        DeleteAccountingRulesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteAccountingRulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAccountingRulesResponse} obj Optional instance to populate.
     * @return {module:model/DeleteAccountingRulesResponse} The populated <code>DeleteAccountingRulesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteAccountingRulesResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteAccountingRulesResponse.prototype['resourceId'] = undefined;






export default DeleteAccountingRulesResponse;

