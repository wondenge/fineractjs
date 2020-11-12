

import ApiClient from '../ApiClient';
import GetClientsDocumentType from './GetClientsDocumentType';

/**
 * The GetClientsClientIdIdentifiersResponse model module.
 * @module model/GetClientsClientIdIdentifiersResponse
 * @version 1.0
 */
class GetClientsClientIdIdentifiersResponse {
    /**
     * Constructs a new <code>GetClientsClientIdIdentifiersResponse</code>.
     * GetClientsClientIdIdentifiersResponse
     * @alias module:model/GetClientsClientIdIdentifiersResponse
     */
    constructor() { 
        
        GetClientsClientIdIdentifiersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsClientIdIdentifiersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsClientIdIdentifiersResponse} obj Optional instance to populate.
     * @return {module:model/GetClientsClientIdIdentifiersResponse} The populated <code>GetClientsClientIdIdentifiersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsClientIdIdentifiersResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('documentType')) {
                obj['documentType'] = GetClientsDocumentType.constructFromObject(data['documentType']);
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
 * @member {Number} id
 */
GetClientsClientIdIdentifiersResponse.prototype['id'] = undefined;

/**
 * @member {Number} clientId
 */
GetClientsClientIdIdentifiersResponse.prototype['clientId'] = undefined;

/**
 * @member {module:model/GetClientsDocumentType} documentType
 */
GetClientsClientIdIdentifiersResponse.prototype['documentType'] = undefined;

/**
 * @member {String} documentKey
 */
GetClientsClientIdIdentifiersResponse.prototype['documentKey'] = undefined;

/**
 * @member {String} description
 */
GetClientsClientIdIdentifiersResponse.prototype['description'] = undefined;






export default GetClientsClientIdIdentifiersResponse;

