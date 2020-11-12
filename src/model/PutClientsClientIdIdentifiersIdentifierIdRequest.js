

import ApiClient from '../ApiClient';

/**
 * The PutClientsClientIdIdentifiersIdentifierIdRequest model module.
 * @module model/PutClientsClientIdIdentifiersIdentifierIdRequest
 * @version 1.0
 */
class PutClientsClientIdIdentifiersIdentifierIdRequest {
    /**
     * Constructs a new <code>PutClientsClientIdIdentifiersIdentifierIdRequest</code>.
     * PutClientsClientIdIdentifiersIdentifierIdRequest
     * @alias module:model/PutClientsClientIdIdentifiersIdentifierIdRequest
     */
    constructor() { 
        
        PutClientsClientIdIdentifiersIdentifierIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutClientsClientIdIdentifiersIdentifierIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutClientsClientIdIdentifiersIdentifierIdRequest} obj Optional instance to populate.
     * @return {module:model/PutClientsClientIdIdentifiersIdentifierIdRequest} The populated <code>PutClientsClientIdIdentifiersIdentifierIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutClientsClientIdIdentifiersIdentifierIdRequest();

            if (data.hasOwnProperty('documentTypeId')) {
                obj['documentTypeId'] = ApiClient.convertToType(data['documentTypeId'], 'Number');
            }
            if (data.hasOwnProperty('documentKey')) {
                obj['documentKey'] = ApiClient.convertToType(data['documentKey'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} documentTypeId
 */
PutClientsClientIdIdentifiersIdentifierIdRequest.prototype['documentTypeId'] = undefined;

/**
 * @member {String} documentKey
 */
PutClientsClientIdIdentifiersIdentifierIdRequest.prototype['documentKey'] = undefined;

/**
 * @member {String} description
 */
PutClientsClientIdIdentifiersIdentifierIdRequest.prototype['description'] = undefined;






export default PutClientsClientIdIdentifiersIdentifierIdRequest;

