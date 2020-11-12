

import ApiClient from '../ApiClient';
import PutClientsClientIdIdentifiersIdentifierIdRequest from './PutClientsClientIdIdentifiersIdentifierIdRequest';

/**
 * The PutClientsClientIdIdentifiersIdentifierIdResponse model module.
 * @module model/PutClientsClientIdIdentifiersIdentifierIdResponse
 * @version 1.0
 */
class PutClientsClientIdIdentifiersIdentifierIdResponse {
    /**
     * Constructs a new <code>PutClientsClientIdIdentifiersIdentifierIdResponse</code>.
     * PutClientsClientIdIdentifiersIdentifierIdResponse
     * @alias module:model/PutClientsClientIdIdentifiersIdentifierIdResponse
     */
    constructor() { 
        
        PutClientsClientIdIdentifiersIdentifierIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutClientsClientIdIdentifiersIdentifierIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutClientsClientIdIdentifiersIdentifierIdResponse} obj Optional instance to populate.
     * @return {module:model/PutClientsClientIdIdentifiersIdentifierIdResponse} The populated <code>PutClientsClientIdIdentifiersIdentifierIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutClientsClientIdIdentifiersIdentifierIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutClientsClientIdIdentifiersIdentifierIdRequest.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutClientsClientIdIdentifiersIdentifierIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PutClientsClientIdIdentifiersIdentifierIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutClientsClientIdIdentifiersIdentifierIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutClientsClientIdIdentifiersIdentifierIdRequest} changes
 */
PutClientsClientIdIdentifiersIdentifierIdResponse.prototype['changes'] = undefined;






export default PutClientsClientIdIdentifiersIdentifierIdResponse;

