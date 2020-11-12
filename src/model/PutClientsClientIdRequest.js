

import ApiClient from '../ApiClient';

/**
 * The PutClientsClientIdRequest model module.
 * @module model/PutClientsClientIdRequest
 * @version 1.0
 */
class PutClientsClientIdRequest {
    /**
     * Constructs a new <code>PutClientsClientIdRequest</code>.
     * PutClientsClientIdRequest
     * @alias module:model/PutClientsClientIdRequest
     */
    constructor() { 
        
        PutClientsClientIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutClientsClientIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutClientsClientIdRequest} obj Optional instance to populate.
     * @return {module:model/PutClientsClientIdRequest} The populated <code>PutClientsClientIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutClientsClientIdRequest();

            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} externalId
 */
PutClientsClientIdRequest.prototype['externalId'] = undefined;






export default PutClientsClientIdRequest;

