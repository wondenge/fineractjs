

import ApiClient from '../ApiClient';

/**
 * The PutProvisioningEntriesRequest model module.
 * @module model/PutProvisioningEntriesRequest
 * @version 1.0
 */
class PutProvisioningEntriesRequest {
    /**
     * Constructs a new <code>PutProvisioningEntriesRequest</code>.
     * PutProvisioningEntriesRequest
     * @alias module:model/PutProvisioningEntriesRequest
     */
    constructor() { 
        
        PutProvisioningEntriesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutProvisioningEntriesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutProvisioningEntriesRequest} obj Optional instance to populate.
     * @return {module:model/PutProvisioningEntriesRequest} The populated <code>PutProvisioningEntriesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutProvisioningEntriesRequest();

            if (data.hasOwnProperty('command')) {
                obj['command'] = ApiClient.convertToType(data['command'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} command
 */
PutProvisioningEntriesRequest.prototype['command'] = undefined;






export default PutProvisioningEntriesRequest;

