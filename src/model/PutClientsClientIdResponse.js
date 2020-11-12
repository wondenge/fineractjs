

import ApiClient from '../ApiClient';
import PutClientsClientIdRequest from './PutClientsClientIdRequest';

/**
 * The PutClientsClientIdResponse model module.
 * @module model/PutClientsClientIdResponse
 * @version 1.0
 */
class PutClientsClientIdResponse {
    /**
     * Constructs a new <code>PutClientsClientIdResponse</code>.
     * PutClientsClientIdResponse
     * @alias module:model/PutClientsClientIdResponse
     */
    constructor() { 
        
        PutClientsClientIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutClientsClientIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutClientsClientIdResponse} obj Optional instance to populate.
     * @return {module:model/PutClientsClientIdResponse} The populated <code>PutClientsClientIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutClientsClientIdResponse();

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
                obj['changes'] = PutClientsClientIdRequest.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutClientsClientIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PutClientsClientIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutClientsClientIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutClientsClientIdRequest} changes
 */
PutClientsClientIdResponse.prototype['changes'] = undefined;






export default PutClientsClientIdResponse;

