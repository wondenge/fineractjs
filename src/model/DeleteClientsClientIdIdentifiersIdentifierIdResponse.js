

import ApiClient from '../ApiClient';

/**
 * The DeleteClientsClientIdIdentifiersIdentifierIdResponse model module.
 * @module model/DeleteClientsClientIdIdentifiersIdentifierIdResponse
 * @version 1.0
 */
class DeleteClientsClientIdIdentifiersIdentifierIdResponse {
    /**
     * Constructs a new <code>DeleteClientsClientIdIdentifiersIdentifierIdResponse</code>.
     * DeleteClientsClientIdIdentifiersIdentifierIdResponse
     * @alias module:model/DeleteClientsClientIdIdentifiersIdentifierIdResponse
     */
    constructor() { 
        
        DeleteClientsClientIdIdentifiersIdentifierIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteClientsClientIdIdentifiersIdentifierIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteClientsClientIdIdentifiersIdentifierIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteClientsClientIdIdentifiersIdentifierIdResponse} The populated <code>DeleteClientsClientIdIdentifiersIdentifierIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteClientsClientIdIdentifiersIdentifierIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
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
DeleteClientsClientIdIdentifiersIdentifierIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
DeleteClientsClientIdIdentifiersIdentifierIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteClientsClientIdIdentifiersIdentifierIdResponse.prototype['resourceId'] = undefined;






export default DeleteClientsClientIdIdentifiersIdentifierIdResponse;

