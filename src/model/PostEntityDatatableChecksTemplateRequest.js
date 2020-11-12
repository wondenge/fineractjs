

import ApiClient from '../ApiClient';

/**
 * The PostEntityDatatableChecksTemplateRequest model module.
 * @module model/PostEntityDatatableChecksTemplateRequest
 * @version 1.0
 */
class PostEntityDatatableChecksTemplateRequest {
    /**
     * Constructs a new <code>PostEntityDatatableChecksTemplateRequest</code>.
     * PostEntityDatatableChecksTemplateRequest
     * @alias module:model/PostEntityDatatableChecksTemplateRequest
     */
    constructor() { 
        
        PostEntityDatatableChecksTemplateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostEntityDatatableChecksTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostEntityDatatableChecksTemplateRequest} obj Optional instance to populate.
     * @return {module:model/PostEntityDatatableChecksTemplateRequest} The populated <code>PostEntityDatatableChecksTemplateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostEntityDatatableChecksTemplateRequest();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('datatableName')) {
                obj['datatableName'] = ApiClient.convertToType(data['datatableName'], 'String');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} entity
 */
PostEntityDatatableChecksTemplateRequest.prototype['entity'] = undefined;

/**
 * @member {Number} status
 */
PostEntityDatatableChecksTemplateRequest.prototype['status'] = undefined;

/**
 * @member {String} datatableName
 */
PostEntityDatatableChecksTemplateRequest.prototype['datatableName'] = undefined;

/**
 * @member {Number} productId
 */
PostEntityDatatableChecksTemplateRequest.prototype['productId'] = undefined;






export default PostEntityDatatableChecksTemplateRequest;

