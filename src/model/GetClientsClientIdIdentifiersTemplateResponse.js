

import ApiClient from '../ApiClient';
import GetClientsAllowedDocumentTypes from './GetClientsAllowedDocumentTypes';

/**
 * The GetClientsClientIdIdentifiersTemplateResponse model module.
 * @module model/GetClientsClientIdIdentifiersTemplateResponse
 * @version 1.0
 */
class GetClientsClientIdIdentifiersTemplateResponse {
    /**
     * Constructs a new <code>GetClientsClientIdIdentifiersTemplateResponse</code>.
     * GetClientsClientIdIdentifiersTemplateResponse
     * @alias module:model/GetClientsClientIdIdentifiersTemplateResponse
     */
    constructor() { 
        
        GetClientsClientIdIdentifiersTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsClientIdIdentifiersTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsClientIdIdentifiersTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetClientsClientIdIdentifiersTemplateResponse} The populated <code>GetClientsClientIdIdentifiersTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsClientIdIdentifiersTemplateResponse();

            if (data.hasOwnProperty('allowedDocumentTypes')) {
                obj['allowedDocumentTypes'] = ApiClient.convertToType(data['allowedDocumentTypes'], [GetClientsAllowedDocumentTypes]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetClientsAllowedDocumentTypes>} allowedDocumentTypes
 */
GetClientsClientIdIdentifiersTemplateResponse.prototype['allowedDocumentTypes'] = undefined;






export default GetClientsClientIdIdentifiersTemplateResponse;

